import { Request, Response } from "express";
import { Context } from "./context.js";
// import { getUserFromToken } from "../auth/authUtils"; // JWT 파싱 예시

// 예시: userDataSource
const userDataSource = {
  getById: async (id: string) => {
    // 실제 DB 조회 혹은 외부 API 호출
    return { id, email: `${id}@example.com` };
  },
};

export async function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<Context> {
  // 예시: Authorization 헤더에서 유저 정보 추출
  const token = req.headers.authorization?.split("Bearer ")[1];
  //   const user = token ? await getUserFromToken(token) : undefined;

  return {
    req,
    res,
    // user, // 인증된 사용자 정보 (없을 수도 있음)
    dataSources: {
      userDataSource,
    },
  };
}
