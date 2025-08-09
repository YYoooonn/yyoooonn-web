import { useMutation } from "@apollo/client";
import { useSceneStore } from "../nodes/store/nodeStore";
import {
  type CreateSceneMutation,
  type CreateSceneMutationVariables,
  CreateSceneDocument,
  EditAction,
} from "@repo/graphql/client";

export const useSceneArtist = () => {
  const { nodeMap, updateNodes, rootId } = useSceneStore();

  const [mutate, { data, loading, error }] = useMutation<
    CreateSceneMutation,
    CreateSceneMutationVariables
  >(CreateSceneDocument, {
    onCompleted: ({ createScene }) => {
      console.log(createScene);
    },
    onError: (err) => console.warn(err),
  });

  const createScene = async (prompt: string) => {
    const payload = {
      input: { prompt, id: rootId },
    };
    const res = await mutate({ variables: payload });
    if (!res.data) {
      console.warn("no data returned from gemini");
      return "no data returned";
    }

    const { data, summary } = res.data.createScene;

    const actions = data?.map((d) => ({ type: "add", data: d }));

    actions && updateNodes(actions as EditAction[]);

    return summary ?? "...";
  };

  return [createScene, loading, error] as const;
};
