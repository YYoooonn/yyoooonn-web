import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  JSON: { input: Record<string, any>; output: Record<string, any> };
};

export type Animation = {
  __typename?: "Animation";
  delay?: Maybe<Scalars["Float"]["output"]>;
  duration: Scalars["Float"]["output"];
  from: Scalars["Float"]["output"];
  property: Scalars["String"]["output"];
  repeat?: Maybe<Scalars["Int"]["output"]>;
  to: Scalars["Float"]["output"];
};

export type Camera = {
  __typename?: "Camera";
  far?: Maybe<Scalars["Float"]["output"]>;
  fov?: Maybe<Scalars["Float"]["output"]>;
  near?: Maybe<Scalars["Float"]["output"]>;
  type: CameraType;
  zoom?: Maybe<Scalars["Float"]["output"]>;
};

export type CameraType = "orthographic" | "perspective";

export type ChatLog = {
  __typename?: "ChatLog";
  data?: Maybe<Array<Scalars["JSON"]["output"]>>;
  message: Scalars["String"]["output"];
  sender: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
};

export type ChatLogsResponse = {
  __typename?: "ChatLogsResponse";
  logs?: Maybe<Array<ChatLog>>;
};

export type CreateSceneInput = {
  id: Scalars["String"]["input"];
  prompt: Scalars["String"]["input"];
};

export type CreateSceneResponse = {
  __typename?: "CreateSceneResponse";
  data?: Maybe<Array<SceneObject>>;
  summary?: Maybe<Scalars["String"]["output"]>;
};

export type EditAction = {
  __typename?: "EditAction";
  data?: Maybe<Scalars["JSON"]["output"]>;
  type: EditActionType;
};

export type EditActionType = "add" | "remove" | "update";

export type EditSceneResponse = {
  __typename?: "EditSceneResponse";
  actions?: Maybe<Array<EditAction>>;
  summary?: Maybe<Scalars["String"]["output"]>;
};

export type Geometry = {
  __typename?: "Geometry";
  colors?: Maybe<Array<Scalars["Float"]["output"]>>;
  indices?: Maybe<Array<Scalars["Int"]["output"]>>;
  normals?: Maybe<Array<Scalars["Float"]["output"]>>;
  params?: Maybe<Array<Scalars["Float"]["output"]>>;
  type: GeometryType;
  uvs?: Maybe<Array<Scalars["Float"]["output"]>>;
  vertices?: Maybe<Array<Scalars["Float"]["output"]>>;
};

export type GeometryType = "box" | "cone" | "custom" | "cylinder" | "sphere";

export type Light = {
  __typename?: "Light";
  angle?: Maybe<Scalars["Float"]["output"]>;
  color?: Maybe<Scalars["String"]["output"]>;
  distance?: Maybe<Scalars["Float"]["output"]>;
  intensity?: Maybe<Scalars["Float"]["output"]>;
  position?: Maybe<Vector3>;
  target?: Maybe<Vector3>;
  type: LightType;
};

export type LightType = "ambient" | "directional" | "point" | "spot";

export type Material = {
  __typename?: "Material";
  color?: Maybe<Scalars["String"]["output"]>;
  metalness?: Maybe<Scalars["Float"]["output"]>;
  opacity?: Maybe<Scalars["Float"]["output"]>;
  roughness?: Maybe<Scalars["Float"]["output"]>;
  transparent?: Maybe<Scalars["Boolean"]["output"]>;
  type: MaterialType;
};

export type MaterialType = "basic" | "physical" | "standard";

export type Mutation = {
  __typename?: "Mutation";
  createScene: CreateSceneResponse;
  createSceneObject: SceneObject;
  editScene: EditSceneResponse;
  saveScene?: Maybe<Scalars["Boolean"]["output"]>;
  updateScene: SceneData;
  updateSceneObject: SceneObject;
};

export type MutationCreateSceneArgs = {
  input: CreateSceneInput;
};

export type MutationCreateSceneObjectArgs = {
  input: PromptInput;
};

export type MutationEditSceneArgs = {
  input: SceneObjectInput;
};

export type MutationSaveSceneArgs = {
  data: Scalars["JSON"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationUpdateSceneArgs = {
  data: Scalars["JSON"]["input"];
};

export type MutationUpdateSceneObjectArgs = {
  input: PromptInput;
};

export type PromptInput = {
  prompt: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  getChatLogs: ChatLogsResponse;
  getScene?: Maybe<SceneData>;
};

export type QueryGetChatLogsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetSceneArgs = {
  id: Scalars["ID"]["input"];
};

export type SceneData = {
  __typename?: "SceneData";
  objects?: Maybe<Array<SceneObject>>;
  rootId: Scalars["ID"]["output"];
};

export type SceneObject = {
  __typename?: "SceneObject";
  animations?: Maybe<Array<Animation>>;
  background?: Maybe<Scalars["String"]["output"]>;
  camera?: Maybe<Camera>;
  count?: Maybe<Scalars["Int"]["output"]>;
  geometry?: Maybe<Geometry>;
  id: Scalars["ID"]["output"];
  light?: Maybe<Light>;
  material?: Maybe<Material>;
  name?: Maybe<Scalars["String"]["output"]>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  position?: Maybe<Vector3>;
  rotation?: Maybe<Vector3>;
  scale?: Maybe<Vector3>;
  type: SceneObjectType;
};

export type SceneObjectInput = {
  data: Scalars["JSON"]["input"];
  id: Scalars["String"]["input"];
  prompt: Scalars["String"]["input"];
};

export type SceneObjectType = "camera" | "group" | "light" | "mesh" | "scene";

export type Vector3 = {
  __typename?: "Vector3";
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
  z: Scalars["Float"]["output"];
};

export type GetChatLogsQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetChatLogsQuery = {
  __typename?: "Query";
  getChatLogs: {
    __typename?: "ChatLogsResponse";
    logs?: Array<{
      __typename?: "ChatLog";
      sender: string;
      message: string;
      timestamp: number;
      data?: Array<Record<string, any>> | null;
    }> | null;
  };
};

export type EditActionFieldsFragment = {
  __typename?: "EditAction";
  type: EditActionType;
  data?: Record<string, any> | null;
};

export type AnimationFieldsFragment = {
  __typename?: "Animation";
  property: string;
  from: number;
  to: number;
  duration: number;
  delay?: number | null;
  repeat?: number | null;
};

export type CameraFieldsFragment = {
  __typename?: "Camera";
  type: CameraType;
  fov?: number | null;
  near?: number | null;
  far?: number | null;
  zoom?: number | null;
};

export type GeometryFieldsFragment = {
  __typename?: "Geometry";
  type: GeometryType;
  params?: Array<number> | null;
  vertices?: Array<number> | null;
  indices?: Array<number> | null;
  normals?: Array<number> | null;
  uvs?: Array<number> | null;
  colors?: Array<number> | null;
};

export type LightFieldsFragment = {
  __typename?: "Light";
  type: LightType;
  color?: string | null;
  intensity?: number | null;
  distance?: number | null;
  angle?: number | null;
  position?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
  target?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
};

export type MaterialFieldsFragment = {
  __typename?: "Material";
  type: MaterialType;
  color?: string | null;
  roughness?: number | null;
  metalness?: number | null;
  transparent?: boolean | null;
  opacity?: number | null;
};

export type SceneObjectFieldsFragment = {
  __typename?: "SceneObject";
  id: string;
  parentId?: string | null;
  name?: string | null;
  type: SceneObjectType;
  count?: number | null;
  geometry?: {
    __typename?: "Geometry";
    type: GeometryType;
    params?: Array<number> | null;
    vertices?: Array<number> | null;
    indices?: Array<number> | null;
    normals?: Array<number> | null;
    uvs?: Array<number> | null;
    colors?: Array<number> | null;
  } | null;
  material?: {
    __typename?: "Material";
    type: MaterialType;
    color?: string | null;
    roughness?: number | null;
    metalness?: number | null;
    transparent?: boolean | null;
    opacity?: number | null;
  } | null;
  light?: {
    __typename?: "Light";
    type: LightType;
    color?: string | null;
    intensity?: number | null;
    distance?: number | null;
    angle?: number | null;
    position?: {
      __typename?: "Vector3";
      x: number;
      y: number;
      z: number;
    } | null;
    target?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
  } | null;
  camera?: {
    __typename?: "Camera";
    type: CameraType;
    fov?: number | null;
    near?: number | null;
    far?: number | null;
    zoom?: number | null;
  } | null;
  position?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
  rotation?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
  scale?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
  animations?: Array<{
    __typename?: "Animation";
    property: string;
    from: number;
    to: number;
    duration: number;
    delay?: number | null;
    repeat?: number | null;
  }> | null;
};

export type Vector3FieldsFragment = {
  __typename?: "Vector3";
  x: number;
  y: number;
  z: number;
};

export type CreateSceneObjectMutationVariables = Exact<{
  input: PromptInput;
}>;

export type CreateSceneObjectMutation = {
  __typename?: "Mutation";
  createSceneObject: {
    __typename?: "SceneObject";
    id: string;
    parentId?: string | null;
    name?: string | null;
    type: SceneObjectType;
    count?: number | null;
    geometry?: {
      __typename?: "Geometry";
      type: GeometryType;
      params?: Array<number> | null;
      vertices?: Array<number> | null;
      indices?: Array<number> | null;
      normals?: Array<number> | null;
      uvs?: Array<number> | null;
      colors?: Array<number> | null;
    } | null;
    material?: {
      __typename?: "Material";
      type: MaterialType;
      color?: string | null;
      roughness?: number | null;
      metalness?: number | null;
      transparent?: boolean | null;
      opacity?: number | null;
    } | null;
    light?: {
      __typename?: "Light";
      type: LightType;
      color?: string | null;
      intensity?: number | null;
      distance?: number | null;
      angle?: number | null;
      position?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      target?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
    } | null;
    camera?: {
      __typename?: "Camera";
      type: CameraType;
      fov?: number | null;
      near?: number | null;
      far?: number | null;
      zoom?: number | null;
    } | null;
    position?: {
      __typename?: "Vector3";
      x: number;
      y: number;
      z: number;
    } | null;
    rotation?: {
      __typename?: "Vector3";
      x: number;
      y: number;
      z: number;
    } | null;
    scale?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
    animations?: Array<{
      __typename?: "Animation";
      property: string;
      from: number;
      to: number;
      duration: number;
      delay?: number | null;
      repeat?: number | null;
    }> | null;
  };
};

export type CreateSceneMutationVariables = Exact<{
  input: CreateSceneInput;
}>;

export type CreateSceneMutation = {
  __typename?: "Mutation";
  createScene: {
    __typename?: "CreateSceneResponse";
    summary?: string | null;
    data?: Array<{
      __typename?: "SceneObject";
      id: string;
      parentId?: string | null;
      name?: string | null;
      type: SceneObjectType;
      count?: number | null;
      geometry?: {
        __typename?: "Geometry";
        type: GeometryType;
        params?: Array<number> | null;
        vertices?: Array<number> | null;
        indices?: Array<number> | null;
        normals?: Array<number> | null;
        uvs?: Array<number> | null;
        colors?: Array<number> | null;
      } | null;
      material?: {
        __typename?: "Material";
        type: MaterialType;
        color?: string | null;
        roughness?: number | null;
        metalness?: number | null;
        transparent?: boolean | null;
        opacity?: number | null;
      } | null;
      light?: {
        __typename?: "Light";
        type: LightType;
        color?: string | null;
        intensity?: number | null;
        distance?: number | null;
        angle?: number | null;
        position?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
        target?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
      } | null;
      camera?: {
        __typename?: "Camera";
        type: CameraType;
        fov?: number | null;
        near?: number | null;
        far?: number | null;
        zoom?: number | null;
      } | null;
      position?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      rotation?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      scale?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      animations?: Array<{
        __typename?: "Animation";
        property: string;
        from: number;
        to: number;
        duration: number;
        delay?: number | null;
        repeat?: number | null;
      }> | null;
    }> | null;
  };
};

export type EditSceneMutationVariables = Exact<{
  input: SceneObjectInput;
}>;

export type EditSceneMutation = {
  __typename?: "Mutation";
  editScene: {
    __typename?: "EditSceneResponse";
    summary?: string | null;
    actions?: Array<{
      __typename?: "EditAction";
      type: EditActionType;
      data?: Record<string, any> | null;
    }> | null;
  };
};

export type GetSceneQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetSceneQuery = {
  __typename?: "Query";
  getScene?: {
    __typename?: "SceneData";
    rootId: string;
    objects?: Array<{
      __typename?: "SceneObject";
      id: string;
      parentId?: string | null;
      name?: string | null;
      type: SceneObjectType;
      count?: number | null;
      geometry?: {
        __typename?: "Geometry";
        type: GeometryType;
        params?: Array<number> | null;
        vertices?: Array<number> | null;
        indices?: Array<number> | null;
        normals?: Array<number> | null;
        uvs?: Array<number> | null;
        colors?: Array<number> | null;
      } | null;
      material?: {
        __typename?: "Material";
        type: MaterialType;
        color?: string | null;
        roughness?: number | null;
        metalness?: number | null;
        transparent?: boolean | null;
        opacity?: number | null;
      } | null;
      light?: {
        __typename?: "Light";
        type: LightType;
        color?: string | null;
        intensity?: number | null;
        distance?: number | null;
        angle?: number | null;
        position?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
        target?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
      } | null;
      camera?: {
        __typename?: "Camera";
        type: CameraType;
        fov?: number | null;
        near?: number | null;
        far?: number | null;
        zoom?: number | null;
      } | null;
      position?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      rotation?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      scale?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      animations?: Array<{
        __typename?: "Animation";
        property: string;
        from: number;
        to: number;
        duration: number;
        delay?: number | null;
        repeat?: number | null;
      }> | null;
    }> | null;
  } | null;
};

export type SaveSceneMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  data: Scalars["JSON"]["input"];
}>;

export type SaveSceneMutation = {
  __typename?: "Mutation";
  saveScene?: boolean | null;
};

export type UpdateSceneMutationVariables = Exact<{
  data: Scalars["JSON"]["input"];
}>;

export type UpdateSceneMutation = {
  __typename?: "Mutation";
  updateScene: {
    __typename?: "SceneData";
    rootId: string;
    objects?: Array<{
      __typename?: "SceneObject";
      id: string;
      parentId?: string | null;
      name?: string | null;
      type: SceneObjectType;
      count?: number | null;
      geometry?: {
        __typename?: "Geometry";
        type: GeometryType;
        params?: Array<number> | null;
        vertices?: Array<number> | null;
        indices?: Array<number> | null;
        normals?: Array<number> | null;
        uvs?: Array<number> | null;
        colors?: Array<number> | null;
      } | null;
      material?: {
        __typename?: "Material";
        type: MaterialType;
        color?: string | null;
        roughness?: number | null;
        metalness?: number | null;
        transparent?: boolean | null;
        opacity?: number | null;
      } | null;
      light?: {
        __typename?: "Light";
        type: LightType;
        color?: string | null;
        intensity?: number | null;
        distance?: number | null;
        angle?: number | null;
        position?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
        target?: {
          __typename?: "Vector3";
          x: number;
          y: number;
          z: number;
        } | null;
      } | null;
      camera?: {
        __typename?: "Camera";
        type: CameraType;
        fov?: number | null;
        near?: number | null;
        far?: number | null;
        zoom?: number | null;
      } | null;
      position?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      rotation?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      scale?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      animations?: Array<{
        __typename?: "Animation";
        property: string;
        from: number;
        to: number;
        duration: number;
        delay?: number | null;
        repeat?: number | null;
      }> | null;
    }> | null;
  };
};

export type UpdateSceneObjectMutationVariables = Exact<{
  input: PromptInput;
}>;

export type UpdateSceneObjectMutation = {
  __typename?: "Mutation";
  updateSceneObject: {
    __typename?: "SceneObject";
    id: string;
    parentId?: string | null;
    name?: string | null;
    type: SceneObjectType;
    count?: number | null;
    geometry?: {
      __typename?: "Geometry";
      type: GeometryType;
      params?: Array<number> | null;
      vertices?: Array<number> | null;
      indices?: Array<number> | null;
      normals?: Array<number> | null;
      uvs?: Array<number> | null;
      colors?: Array<number> | null;
    } | null;
    material?: {
      __typename?: "Material";
      type: MaterialType;
      color?: string | null;
      roughness?: number | null;
      metalness?: number | null;
      transparent?: boolean | null;
      opacity?: number | null;
    } | null;
    light?: {
      __typename?: "Light";
      type: LightType;
      color?: string | null;
      intensity?: number | null;
      distance?: number | null;
      angle?: number | null;
      position?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
      target?: {
        __typename?: "Vector3";
        x: number;
        y: number;
        z: number;
      } | null;
    } | null;
    camera?: {
      __typename?: "Camera";
      type: CameraType;
      fov?: number | null;
      near?: number | null;
      far?: number | null;
      zoom?: number | null;
    } | null;
    position?: {
      __typename?: "Vector3";
      x: number;
      y: number;
      z: number;
    } | null;
    rotation?: {
      __typename?: "Vector3";
      x: number;
      y: number;
      z: number;
    } | null;
    scale?: { __typename?: "Vector3"; x: number; y: number; z: number } | null;
    animations?: Array<{
      __typename?: "Animation";
      property: string;
      from: number;
      to: number;
      duration: number;
      delay?: number | null;
      repeat?: number | null;
    }> | null;
  };
};

export const EditActionFieldsFragmentDoc = gql`
  fragment EditActionFields on EditAction {
    type
    data
  }
`;
export const GeometryFieldsFragmentDoc = gql`
  fragment GeometryFields on Geometry {
    type
    params
    vertices
    indices
    normals
    uvs
    colors
  }
`;
export const MaterialFieldsFragmentDoc = gql`
  fragment MaterialFields on Material {
    type
    color
    roughness
    metalness
    transparent
    opacity
  }
`;
export const Vector3FieldsFragmentDoc = gql`
  fragment Vector3Fields on Vector3 {
    x
    y
    z
  }
`;
export const LightFieldsFragmentDoc = gql`
  fragment LightFields on Light {
    type
    color
    intensity
    position {
      ...Vector3Fields
    }
    distance
    angle
    target {
      ...Vector3Fields
    }
  }
  ${Vector3FieldsFragmentDoc}
`;
export const CameraFieldsFragmentDoc = gql`
  fragment CameraFields on Camera {
    type
    fov
    near
    far
    zoom
  }
`;
export const AnimationFieldsFragmentDoc = gql`
  fragment AnimationFields on Animation {
    property
    from
    to
    duration
    delay
    repeat
  }
`;
export const SceneObjectFieldsFragmentDoc = gql`
  fragment SceneObjectFields on SceneObject {
    id
    parentId
    name
    type
    geometry {
      ...GeometryFields
    }
    material {
      ...MaterialFields
    }
    light {
      ...LightFields
    }
    camera {
      ...CameraFields
    }
    position {
      ...Vector3Fields
    }
    rotation {
      ...Vector3Fields
    }
    scale {
      ...Vector3Fields
    }
    count
    animations {
      ...AnimationFields
    }
  }
  ${GeometryFieldsFragmentDoc}
  ${MaterialFieldsFragmentDoc}
  ${LightFieldsFragmentDoc}
  ${CameraFieldsFragmentDoc}
  ${Vector3FieldsFragmentDoc}
  ${AnimationFieldsFragmentDoc}
`;
export const GetChatLogsDocument = gql`
  query GetChatLogs($id: ID!) {
    getChatLogs(id: $id) {
      logs {
        sender
        message
        timestamp
        data
      }
    }
  }
`;

/**
 * __useGetChatLogsQuery__
 *
 * To run a query within a React component, call `useGetChatLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatLogsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChatLogsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChatLogsQuery,
    GetChatLogsQueryVariables
  > &
    (
      | { variables: GetChatLogsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetChatLogsQuery, GetChatLogsQueryVariables>(
    GetChatLogsDocument,
    options,
  );
}
export function useGetChatLogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChatLogsQuery,
    GetChatLogsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetChatLogsQuery, GetChatLogsQueryVariables>(
    GetChatLogsDocument,
    options,
  );
}
export function useGetChatLogsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetChatLogsQuery,
        GetChatLogsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetChatLogsQuery, GetChatLogsQueryVariables>(
    GetChatLogsDocument,
    options,
  );
}
export type GetChatLogsQueryHookResult = ReturnType<typeof useGetChatLogsQuery>;
export type GetChatLogsLazyQueryHookResult = ReturnType<
  typeof useGetChatLogsLazyQuery
>;
export type GetChatLogsSuspenseQueryHookResult = ReturnType<
  typeof useGetChatLogsSuspenseQuery
>;
export type GetChatLogsQueryResult = Apollo.QueryResult<
  GetChatLogsQuery,
  GetChatLogsQueryVariables
>;
export const CreateSceneObjectDocument = gql`
  mutation CreateSceneObject($input: PromptInput!) {
    createSceneObject(input: $input) {
      ...SceneObjectFields
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`;
export type CreateSceneObjectMutationFn = Apollo.MutationFunction<
  CreateSceneObjectMutation,
  CreateSceneObjectMutationVariables
>;

/**
 * __useCreateSceneObjectMutation__
 *
 * To run a mutation, you first call `useCreateSceneObjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneObjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneObjectMutation, { data, loading, error }] = useCreateSceneObjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneObjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSceneObjectMutation,
    CreateSceneObjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSceneObjectMutation,
    CreateSceneObjectMutationVariables
  >(CreateSceneObjectDocument, options);
}
export type CreateSceneObjectMutationHookResult = ReturnType<
  typeof useCreateSceneObjectMutation
>;
export type CreateSceneObjectMutationResult =
  Apollo.MutationResult<CreateSceneObjectMutation>;
export type CreateSceneObjectMutationOptions = Apollo.BaseMutationOptions<
  CreateSceneObjectMutation,
  CreateSceneObjectMutationVariables
>;
export const CreateSceneDocument = gql`
  mutation CreateScene($input: CreateSceneInput!) {
    createScene(input: $input) {
      summary
      data {
        ...SceneObjectFields
      }
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`;
export type CreateSceneMutationFn = Apollo.MutationFunction<
  CreateSceneMutation,
  CreateSceneMutationVariables
>;

/**
 * __useCreateSceneMutation__
 *
 * To run a mutation, you first call `useCreateSceneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneMutation, { data, loading, error }] = useCreateSceneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSceneMutation,
    CreateSceneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSceneMutation, CreateSceneMutationVariables>(
    CreateSceneDocument,
    options,
  );
}
export type CreateSceneMutationHookResult = ReturnType<
  typeof useCreateSceneMutation
>;
export type CreateSceneMutationResult =
  Apollo.MutationResult<CreateSceneMutation>;
export type CreateSceneMutationOptions = Apollo.BaseMutationOptions<
  CreateSceneMutation,
  CreateSceneMutationVariables
>;
export const EditSceneDocument = gql`
  mutation EditScene($input: SceneObjectInput!) {
    editScene(input: $input) {
      summary
      actions {
        ...EditActionFields
      }
    }
  }
  ${EditActionFieldsFragmentDoc}
`;
export type EditSceneMutationFn = Apollo.MutationFunction<
  EditSceneMutation,
  EditSceneMutationVariables
>;

/**
 * __useEditSceneMutation__
 *
 * To run a mutation, you first call `useEditSceneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSceneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSceneMutation, { data, loading, error }] = useEditSceneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditSceneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditSceneMutation,
    EditSceneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditSceneMutation, EditSceneMutationVariables>(
    EditSceneDocument,
    options,
  );
}
export type EditSceneMutationHookResult = ReturnType<
  typeof useEditSceneMutation
>;
export type EditSceneMutationResult = Apollo.MutationResult<EditSceneMutation>;
export type EditSceneMutationOptions = Apollo.BaseMutationOptions<
  EditSceneMutation,
  EditSceneMutationVariables
>;
export const GetSceneDocument = gql`
  query GetScene($id: ID!) {
    getScene(id: $id) {
      rootId
      objects {
        ...SceneObjectFields
      }
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`;

/**
 * __useGetSceneQuery__
 *
 * To run a query within a React component, call `useGetSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSceneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSceneQuery(
  baseOptions: Apollo.QueryHookOptions<GetSceneQuery, GetSceneQueryVariables> &
    ({ variables: GetSceneQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSceneQuery, GetSceneQueryVariables>(
    GetSceneDocument,
    options,
  );
}
export function useGetSceneLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSceneQuery,
    GetSceneQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSceneQuery, GetSceneQueryVariables>(
    GetSceneDocument,
    options,
  );
}
export function useGetSceneSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetSceneQuery, GetSceneQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetSceneQuery, GetSceneQueryVariables>(
    GetSceneDocument,
    options,
  );
}
export type GetSceneQueryHookResult = ReturnType<typeof useGetSceneQuery>;
export type GetSceneLazyQueryHookResult = ReturnType<
  typeof useGetSceneLazyQuery
>;
export type GetSceneSuspenseQueryHookResult = ReturnType<
  typeof useGetSceneSuspenseQuery
>;
export type GetSceneQueryResult = Apollo.QueryResult<
  GetSceneQuery,
  GetSceneQueryVariables
>;
export const SaveSceneDocument = gql`
  mutation SaveScene($id: ID!, $data: JSON!) {
    saveScene(id: $id, data: $data)
  }
`;
export type SaveSceneMutationFn = Apollo.MutationFunction<
  SaveSceneMutation,
  SaveSceneMutationVariables
>;

/**
 * __useSaveSceneMutation__
 *
 * To run a mutation, you first call `useSaveSceneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveSceneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveSceneMutation, { data, loading, error }] = useSaveSceneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveSceneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveSceneMutation,
    SaveSceneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SaveSceneMutation, SaveSceneMutationVariables>(
    SaveSceneDocument,
    options,
  );
}
export type SaveSceneMutationHookResult = ReturnType<
  typeof useSaveSceneMutation
>;
export type SaveSceneMutationResult = Apollo.MutationResult<SaveSceneMutation>;
export type SaveSceneMutationOptions = Apollo.BaseMutationOptions<
  SaveSceneMutation,
  SaveSceneMutationVariables
>;
export const UpdateSceneDocument = gql`
  mutation UpdateScene($data: JSON!) {
    updateScene(data: $data) {
      rootId
      objects {
        ...SceneObjectFields
      }
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`;
export type UpdateSceneMutationFn = Apollo.MutationFunction<
  UpdateSceneMutation,
  UpdateSceneMutationVariables
>;

/**
 * __useUpdateSceneMutation__
 *
 * To run a mutation, you first call `useUpdateSceneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSceneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSceneMutation, { data, loading, error }] = useUpdateSceneMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSceneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSceneMutation,
    UpdateSceneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateSceneMutation, UpdateSceneMutationVariables>(
    UpdateSceneDocument,
    options,
  );
}
export type UpdateSceneMutationHookResult = ReturnType<
  typeof useUpdateSceneMutation
>;
export type UpdateSceneMutationResult =
  Apollo.MutationResult<UpdateSceneMutation>;
export type UpdateSceneMutationOptions = Apollo.BaseMutationOptions<
  UpdateSceneMutation,
  UpdateSceneMutationVariables
>;
export const UpdateSceneObjectDocument = gql`
  mutation UpdateSceneObject($input: PromptInput!) {
    updateSceneObject(input: $input) {
      ...SceneObjectFields
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`;
export type UpdateSceneObjectMutationFn = Apollo.MutationFunction<
  UpdateSceneObjectMutation,
  UpdateSceneObjectMutationVariables
>;

/**
 * __useUpdateSceneObjectMutation__
 *
 * To run a mutation, you first call `useUpdateSceneObjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSceneObjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSceneObjectMutation, { data, loading, error }] = useUpdateSceneObjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSceneObjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSceneObjectMutation,
    UpdateSceneObjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSceneObjectMutation,
    UpdateSceneObjectMutationVariables
  >(UpdateSceneObjectDocument, options);
}
export type UpdateSceneObjectMutationHookResult = ReturnType<
  typeof useUpdateSceneObjectMutation
>;
export type UpdateSceneObjectMutationResult =
  Apollo.MutationResult<UpdateSceneObjectMutation>;
export type UpdateSceneObjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateSceneObjectMutation,
  UpdateSceneObjectMutationVariables
>;
