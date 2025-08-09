import { type SceneObjectFieldsFragment } from "@repo/graphql/client";

type PARAMS = [number, number, number];
export function NodeGeometry({
  geometry,
}: {
  geometry?: SceneObjectFieldsFragment["geometry"];
}) {
  if (!geometry) return <boxGeometry />;

  const { type, params, vertices, indices } = geometry;
  switch (type) {
    case "box":
      return <boxGeometry args={params ? (params as PARAMS) : [1, 1, 1]} />;
    case "sphere":
      return (
        <sphereGeometry args={params ? (params as PARAMS) : [1, 32, 16]} />
      );
    case "cone":
      return <coneGeometry args={params ? (params as PARAMS) : [1, 1, 8]} />;
    case "cylinder":
      return (
        <cylinderGeometry args={params ? (params as PARAMS) : [1, 1, 1, 8]} />
      );
    default:
      return <boxGeometry />;
  }
}
