import dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

const host = process.env.REDIS_HOST ?? "localhost";
const port = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379;
const pw = process.env.REDIS_PASSWORD;

let redis: Redis | null = null;

function createRedis(): Redis {
  const client = new Redis({
    host,
    port,
    password: pw,
    retryStrategy: (times) => {
      if (times > 5) {
        console.error("Redis retry failed too many times. Closing Redis.");
        setTimeout(() => {
          redis?.disconnect(); // 명시적으로 연결 종료
          redis = null; // 외부 변수에 반영
        }, 0);
        return null; // 재시도 중단
      }
      return Math.min(times * 100, 3000);
    },
  });

  client.on("connect", () => {
    console.log("Redis connected");
  });

  client.on("error", (err) => {
    console.error("Redis error:", err);
  });

  return client;
}

redis = createRedis();

export { redis };
