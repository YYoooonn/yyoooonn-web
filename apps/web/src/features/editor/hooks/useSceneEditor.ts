import { useMutation } from "@apollo/client";
import { useSceneStore } from "../nodes/store/nodeStore";
import {
  type EditSceneMutation,
  type EditSceneMutationVariables,
  EditSceneDocument,
} from "@repo/graphql/client";

export const useSceneEditor = () => {
  const { nodeMap, updateNodes, rootId } = useSceneStore();

  const [mutate, { data, loading, error }] = useMutation<
    EditSceneMutation,
    EditSceneMutationVariables
  >(EditSceneDocument, {
    onCompleted: ({ editScene }) => {},
    onError: (err) => console.warn(err),
  });

  const editScene = async (prompt: string) => {
    const payload = {
      input: { prompt, data: Object.values(nodeMap), id: rootId },
    };
    const res = await mutate({ variables: payload });
    if (!res.data) throw new Error("no data from editSceneMutation");

    const { actions, summary } = res.data.editScene;

    if (actions) updateNodes(actions);

    return summary ?? "...";
  };

  return [editScene, loading, error] as const;
};
