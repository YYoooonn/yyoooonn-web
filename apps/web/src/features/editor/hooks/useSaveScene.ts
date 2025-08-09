import { useMutation } from "@apollo/client";
import { useSceneStore } from "../nodes/store/nodeStore";
import {
  SaveSceneDocument,
  SaveSceneMutation,
  SaveSceneMutationVariables,
  useSaveSceneMutation,
} from "@repo/graphql/client";

export const useSaveScene = () => {
  const { rootId, nodeMap } = useSceneStore();

  const [saveSceneMutation, { loading, error }] = useSaveSceneMutation();
  // const [mutate, { data }] = useMutation<
  //   SaveSceneMutation,
  //   SaveSceneMutationVariables
  // >(SaveSceneDocument, {
  //   onCompleted: ({ saveScene }) => {},
  //   onError: (err) => console.warn(err)
  // });

  const save = async (id?: string) => {
    const payload = {
      id: id ?? rootId,
      data: {
        rootId,
        objects: Object.values(nodeMap),
      },
    };

    try {
      const res = await saveSceneMutation({ variables: payload });
      return res.data?.saveScene;
    } catch (err) {
      console.error("Failed to save scene", err);
      return false;
    }
  };

  return { save, loading, error };
};
