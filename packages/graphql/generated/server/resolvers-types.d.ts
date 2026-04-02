import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  JSON: { input: any; output: any };
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

export enum CameraType {
  Orthographic = "orthographic",
  Perspective = "perspective",
}

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

export enum EditActionType {
  Add = "add",
  Remove = "remove",
  Update = "update",
}

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

export enum GeometryType {
  Box = "box",
  Cone = "cone",
  Custom = "custom",
  Cylinder = "cylinder",
  Sphere = "sphere",
}

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

export enum LightType {
  Ambient = "ambient",
  Directional = "directional",
  Point = "point",
  Spot = "spot",
}

export type Material = {
  __typename?: "Material";
  color?: Maybe<Scalars["String"]["output"]>;
  metalness?: Maybe<Scalars["Float"]["output"]>;
  opacity?: Maybe<Scalars["Float"]["output"]>;
  roughness?: Maybe<Scalars["Float"]["output"]>;
  transparent?: Maybe<Scalars["Boolean"]["output"]>;
  type: MaterialType;
};

export enum MaterialType {
  Basic = "basic",
  Physical = "physical",
  Standard = "standard",
}

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

export enum SceneObjectType {
  Camera = "camera",
  Group = "group",
  Light = "light",
  Mesh = "mesh",
  Scene = "scene",
}

export type Vector3 = {
  __typename?: "Vector3";
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
  z: Scalars["Float"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Animation: ResolverTypeWrapper<Animation>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Camera: ResolverTypeWrapper<Camera>;
  CameraType: CameraType;
  ChatLog: ResolverTypeWrapper<ChatLog>;
  ChatLogsResponse: ResolverTypeWrapper<ChatLogsResponse>;
  CreateSceneInput: CreateSceneInput;
  CreateSceneResponse: ResolverTypeWrapper<CreateSceneResponse>;
  EditAction: ResolverTypeWrapper<EditAction>;
  EditActionType: EditActionType;
  EditSceneResponse: ResolverTypeWrapper<EditSceneResponse>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Geometry: ResolverTypeWrapper<Geometry>;
  GeometryType: GeometryType;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]["output"]>;
  Light: ResolverTypeWrapper<Light>;
  LightType: LightType;
  Material: ResolverTypeWrapper<Material>;
  MaterialType: MaterialType;
  Mutation: ResolverTypeWrapper<{}>;
  PromptInput: PromptInput;
  Query: ResolverTypeWrapper<{}>;
  SceneData: ResolverTypeWrapper<SceneData>;
  SceneObject: ResolverTypeWrapper<SceneObject>;
  SceneObjectInput: SceneObjectInput;
  SceneObjectType: SceneObjectType;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Vector3: ResolverTypeWrapper<Vector3>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Animation: Animation;
  Boolean: Scalars["Boolean"]["output"];
  Camera: Camera;
  ChatLog: ChatLog;
  ChatLogsResponse: ChatLogsResponse;
  CreateSceneInput: CreateSceneInput;
  CreateSceneResponse: CreateSceneResponse;
  EditAction: EditAction;
  EditSceneResponse: EditSceneResponse;
  Float: Scalars["Float"]["output"];
  Geometry: Geometry;
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  JSON: Scalars["JSON"]["output"];
  Light: Light;
  Material: Material;
  Mutation: {};
  PromptInput: PromptInput;
  Query: {};
  SceneData: SceneData;
  SceneObject: SceneObject;
  SceneObjectInput: SceneObjectInput;
  String: Scalars["String"]["output"];
  Vector3: Vector3;
};

export type AnimationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Animation"] =
    ResolversParentTypes["Animation"],
> = {
  delay?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  from?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  property?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  to?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CameraResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Camera"] =
    ResolversParentTypes["Camera"],
> = {
  far?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  fov?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  near?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CameraType"], ParentType, ContextType>;
  zoom?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ChatLog"] =
    ResolversParentTypes["ChatLog"],
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["JSON"]>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatLogsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ChatLogsResponse"] =
    ResolversParentTypes["ChatLogsResponse"],
> = {
  logs?: Resolver<
    Maybe<Array<ResolversTypes["ChatLog"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSceneResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSceneResponse"] =
    ResolversParentTypes["CreateSceneResponse"],
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["SceneObject"]>>,
    ParentType,
    ContextType
  >;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditActionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EditAction"] =
    ResolversParentTypes["EditAction"],
> = {
  data?: Resolver<Maybe<ResolversTypes["JSON"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["EditActionType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditSceneResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EditSceneResponse"] =
    ResolversParentTypes["EditSceneResponse"],
> = {
  actions?: Resolver<
    Maybe<Array<ResolversTypes["EditAction"]>>,
    ParentType,
    ContextType
  >;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeometryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Geometry"] =
    ResolversParentTypes["Geometry"],
> = {
  colors?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  indices?: Resolver<
    Maybe<Array<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  normals?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  params?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["GeometryType"], ParentType, ContextType>;
  uvs?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  vertices?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<
  ResolversTypes["JSON"],
  any
> {
  name: "JSON";
}

export type LightResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Light"] =
    ResolversParentTypes["Light"],
> = {
  angle?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  intensity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  position?: Resolver<
    Maybe<ResolversTypes["Vector3"]>,
    ParentType,
    ContextType
  >;
  target?: Resolver<Maybe<ResolversTypes["Vector3"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["LightType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaterialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Material"] =
    ResolversParentTypes["Material"],
> = {
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  metalness?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  opacity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  roughness?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  transparent?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["MaterialType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] =
    ResolversParentTypes["Mutation"],
> = {
  createScene?: Resolver<
    ResolversTypes["CreateSceneResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSceneArgs, "input">
  >;
  createSceneObject?: Resolver<
    ResolversTypes["SceneObject"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSceneObjectArgs, "input">
  >;
  editScene?: Resolver<
    ResolversTypes["EditSceneResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationEditSceneArgs, "input">
  >;
  saveScene?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveSceneArgs, "data" | "id">
  >;
  updateScene?: Resolver<
    ResolversTypes["SceneData"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSceneArgs, "data">
  >;
  updateSceneObject?: Resolver<
    ResolversTypes["SceneObject"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSceneObjectArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] =
    ResolversParentTypes["Query"],
> = {
  getChatLogs?: Resolver<
    ResolversTypes["ChatLogsResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetChatLogsArgs, "id">
  >;
  getScene?: Resolver<
    Maybe<ResolversTypes["SceneData"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSceneArgs, "id">
  >;
};

export type SceneDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SceneData"] =
    ResolversParentTypes["SceneData"],
> = {
  objects?: Resolver<
    Maybe<Array<ResolversTypes["SceneObject"]>>,
    ParentType,
    ContextType
  >;
  rootId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SceneObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SceneObject"] =
    ResolversParentTypes["SceneObject"],
> = {
  animations?: Resolver<
    Maybe<Array<ResolversTypes["Animation"]>>,
    ParentType,
    ContextType
  >;
  background?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  camera?: Resolver<Maybe<ResolversTypes["Camera"]>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  geometry?: Resolver<
    Maybe<ResolversTypes["Geometry"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  light?: Resolver<Maybe<ResolversTypes["Light"]>, ParentType, ContextType>;
  material?: Resolver<
    Maybe<ResolversTypes["Material"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  position?: Resolver<
    Maybe<ResolversTypes["Vector3"]>,
    ParentType,
    ContextType
  >;
  rotation?: Resolver<
    Maybe<ResolversTypes["Vector3"]>,
    ParentType,
    ContextType
  >;
  scale?: Resolver<Maybe<ResolversTypes["Vector3"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["SceneObjectType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Vector3Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Vector3"] =
    ResolversParentTypes["Vector3"],
> = {
  x?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  y?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  z?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Animation?: AnimationResolvers<ContextType>;
  Camera?: CameraResolvers<ContextType>;
  ChatLog?: ChatLogResolvers<ContextType>;
  ChatLogsResponse?: ChatLogsResponseResolvers<ContextType>;
  CreateSceneResponse?: CreateSceneResponseResolvers<ContextType>;
  EditAction?: EditActionResolvers<ContextType>;
  EditSceneResponse?: EditSceneResponseResolvers<ContextType>;
  Geometry?: GeometryResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Light?: LightResolvers<ContextType>;
  Material?: MaterialResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SceneData?: SceneDataResolvers<ContextType>;
  SceneObject?: SceneObjectResolvers<ContextType>;
  Vector3?: Vector3Resolvers<ContextType>;
};
