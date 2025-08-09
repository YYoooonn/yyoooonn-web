import { redis } from ".";

export type ChatMessage = {
  sender: string;
  message: string;
  timestamp: number;
  data?: [];
};

const DEFAULT_TTL = 60 * 10;
const MAX_MESSAGES = 100;

const getChatKey = (roomId: string) => `chat:room:${roomId}`;

/**
 * 채팅 메시지 저장 (순차적으로 추가, 최대 개수 유지, TTL 설정)
 */
export const saveChatMessage = async (
  roomId: string,
  message: ChatMessage,
  ttlSeconds = DEFAULT_TTL,
  maxMessages = MAX_MESSAGES,
): Promise<boolean> => {
  if (!redis) return false;
  const key = getChatKey(roomId);
  try {
    // 메시지 저장 (뒤에 추가)
    // 추후에 timestamp 따로 받도록
    const modified = { ...message, timestamp: Math.floor(Date.now() / 1000) };
    await redis.rpush(key, JSON.stringify(modified));

    // 오래된 메시지 제거 (최신 maxMessages 개만 유지)
    await redis.ltrim(key, -maxMessages, -1);

    // TTL 설정 (없을 경우에만)
    const ttl = await redis.ttl(key);
    if (ttl === -1) {
      await redis.expire(key, ttlSeconds);
    }

    return true;
  } catch (err) {
    console.error("[Redis 채팅 저장 에러]", err);
    return false;
  }
};

/**
 * 채팅 메시지 조회 (최신 순으로 최대 count 개)
 */
export const loadChatMessages = async (
  roomId: string,
  count = 100,
): Promise<ChatMessage[]> => {
  if (!redis)
    return [{ sender: "system", message: "db not set", timestamp: 0 }]; // test env
  const key = getChatKey(roomId);
  try {
    const messages = await redis.lrange(key, -count, -1);
    return messages.map((msg) => JSON.parse(msg));
  } catch (err) {
    console.error("[Redis 채팅 불러오기 에러]", err);
    return [];
  }
};

export const getChatTTL = async (roomId: string): Promise<number> => {
  if (!redis) return 0;
  return await redis.ttl(getChatKey(roomId));
};

export const extendChatTTL = async (
  roomId: string,
  ttlSeconds = DEFAULT_TTL,
): Promise<boolean> => {
  if (!redis) return false;
  return (await redis.expire(getChatKey(roomId), ttlSeconds)) === 1;
};

export const deleteChatRoom = async (roomId: string): Promise<number> => {
  if (!redis) return 0;
  return await redis.del(getChatKey(roomId));
};
