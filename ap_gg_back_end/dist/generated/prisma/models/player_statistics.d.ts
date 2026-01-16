import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type player_statisticsModel = runtime.Types.Result.DefaultSelection<Prisma.$player_statisticsPayload>;
export type AggregatePlayer_statistics = {
    _count: Player_statisticsCountAggregateOutputType | null;
    _avg: Player_statisticsAvgAggregateOutputType | null;
    _sum: Player_statisticsSumAggregateOutputType | null;
    _min: Player_statisticsMinAggregateOutputType | null;
    _max: Player_statisticsMaxAggregateOutputType | null;
};
export type Player_statisticsAvgAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    games_played: number | null;
    wins: number | null;
    win_rate: number | null;
    avg_kills: number | null;
    avg_deaths: number | null;
    avg_assists: number | null;
    avg_cs_per_min: number | null;
    avg_gold_per_min: number | null;
};
export type Player_statisticsSumAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    games_played: number | null;
    wins: number | null;
    win_rate: number | null;
    avg_kills: number | null;
    avg_deaths: number | null;
    avg_assists: number | null;
    avg_cs_per_min: number | null;
    avg_gold_per_min: number | null;
};
export type Player_statisticsMinAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    games_played: number | null;
    wins: number | null;
    win_rate: number | null;
    avg_kills: number | null;
    avg_deaths: number | null;
    avg_assists: number | null;
    avg_cs_per_min: number | null;
    avg_gold_per_min: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Player_statisticsMaxAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    games_played: number | null;
    wins: number | null;
    win_rate: number | null;
    avg_kills: number | null;
    avg_deaths: number | null;
    avg_assists: number | null;
    avg_cs_per_min: number | null;
    avg_gold_per_min: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Player_statisticsCountAggregateOutputType = {
    id: number;
    player_id: number;
    champion_id: number;
    games_played: number;
    wins: number;
    win_rate: number;
    avg_kills: number;
    avg_deaths: number;
    avg_assists: number;
    avg_cs_per_min: number;
    avg_gold_per_min: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Player_statisticsAvgAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    games_played?: true;
    wins?: true;
    win_rate?: true;
    avg_kills?: true;
    avg_deaths?: true;
    avg_assists?: true;
    avg_cs_per_min?: true;
    avg_gold_per_min?: true;
};
export type Player_statisticsSumAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    games_played?: true;
    wins?: true;
    win_rate?: true;
    avg_kills?: true;
    avg_deaths?: true;
    avg_assists?: true;
    avg_cs_per_min?: true;
    avg_gold_per_min?: true;
};
export type Player_statisticsMinAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    games_played?: true;
    wins?: true;
    win_rate?: true;
    avg_kills?: true;
    avg_deaths?: true;
    avg_assists?: true;
    avg_cs_per_min?: true;
    avg_gold_per_min?: true;
    created_at?: true;
    updated_at?: true;
};
export type Player_statisticsMaxAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    games_played?: true;
    wins?: true;
    win_rate?: true;
    avg_kills?: true;
    avg_deaths?: true;
    avg_assists?: true;
    avg_cs_per_min?: true;
    avg_gold_per_min?: true;
    created_at?: true;
    updated_at?: true;
};
export type Player_statisticsCountAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    games_played?: true;
    wins?: true;
    win_rate?: true;
    avg_kills?: true;
    avg_deaths?: true;
    avg_assists?: true;
    avg_cs_per_min?: true;
    avg_gold_per_min?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Player_statisticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithRelationInput | Prisma.player_statisticsOrderByWithRelationInput[];
    cursor?: Prisma.player_statisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Player_statisticsCountAggregateInputType;
    _avg?: Player_statisticsAvgAggregateInputType;
    _sum?: Player_statisticsSumAggregateInputType;
    _min?: Player_statisticsMinAggregateInputType;
    _max?: Player_statisticsMaxAggregateInputType;
};
export type GetPlayer_statisticsAggregateType<T extends Player_statisticsAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayer_statistics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayer_statistics[P]> : Prisma.GetScalarType<T[P], AggregatePlayer_statistics[P]>;
};
export type player_statisticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithAggregationInput | Prisma.player_statisticsOrderByWithAggregationInput[];
    by: Prisma.Player_statisticsScalarFieldEnum[] | Prisma.Player_statisticsScalarFieldEnum;
    having?: Prisma.player_statisticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Player_statisticsCountAggregateInputType | true;
    _avg?: Player_statisticsAvgAggregateInputType;
    _sum?: Player_statisticsSumAggregateInputType;
    _min?: Player_statisticsMinAggregateInputType;
    _max?: Player_statisticsMaxAggregateInputType;
};
export type Player_statisticsGroupByOutputType = {
    id: number;
    player_id: number;
    champion_id: number;
    games_played: number | null;
    wins: number | null;
    win_rate: number | null;
    avg_kills: number | null;
    avg_deaths: number | null;
    avg_assists: number | null;
    avg_cs_per_min: number | null;
    avg_gold_per_min: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Player_statisticsCountAggregateOutputType | null;
    _avg: Player_statisticsAvgAggregateOutputType | null;
    _sum: Player_statisticsSumAggregateOutputType | null;
    _min: Player_statisticsMinAggregateOutputType | null;
    _max: Player_statisticsMaxAggregateOutputType | null;
};
type GetPlayer_statisticsGroupByPayload<T extends player_statisticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Player_statisticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Player_statisticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Player_statisticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Player_statisticsGroupByOutputType[P]>;
}>>;
export type player_statisticsWhereInput = {
    AND?: Prisma.player_statisticsWhereInput | Prisma.player_statisticsWhereInput[];
    OR?: Prisma.player_statisticsWhereInput[];
    NOT?: Prisma.player_statisticsWhereInput | Prisma.player_statisticsWhereInput[];
    id?: Prisma.IntFilter<"player_statistics"> | number;
    player_id?: Prisma.IntFilter<"player_statistics"> | number;
    champion_id?: Prisma.IntFilter<"player_statistics"> | number;
    games_played?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    wins?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    win_rate?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_kills?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_deaths?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_assists?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_cs_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_gold_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    created_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
    players?: Prisma.XOR<Prisma.PlayersScalarRelationFilter, Prisma.playersWhereInput>;
};
export type player_statisticsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_kills?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_assists?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    champions?: Prisma.championsOrderByWithRelationInput;
    players?: Prisma.playersOrderByWithRelationInput;
};
export type player_statisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    player_id_champion_id?: Prisma.player_statisticsPlayer_idChampion_idCompoundUniqueInput;
    AND?: Prisma.player_statisticsWhereInput | Prisma.player_statisticsWhereInput[];
    OR?: Prisma.player_statisticsWhereInput[];
    NOT?: Prisma.player_statisticsWhereInput | Prisma.player_statisticsWhereInput[];
    player_id?: Prisma.IntFilter<"player_statistics"> | number;
    champion_id?: Prisma.IntFilter<"player_statistics"> | number;
    games_played?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    wins?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    win_rate?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_kills?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_deaths?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_assists?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_cs_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_gold_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    created_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
    players?: Prisma.XOR<Prisma.PlayersScalarRelationFilter, Prisma.playersWhereInput>;
}, "id" | "player_id_champion_id">;
export type player_statisticsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_kills?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_assists?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.player_statisticsCountOrderByAggregateInput;
    _avg?: Prisma.player_statisticsAvgOrderByAggregateInput;
    _max?: Prisma.player_statisticsMaxOrderByAggregateInput;
    _min?: Prisma.player_statisticsMinOrderByAggregateInput;
    _sum?: Prisma.player_statisticsSumOrderByAggregateInput;
};
export type player_statisticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.player_statisticsScalarWhereWithAggregatesInput | Prisma.player_statisticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.player_statisticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.player_statisticsScalarWhereWithAggregatesInput | Prisma.player_statisticsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"player_statistics"> | number;
    player_id?: Prisma.IntWithAggregatesFilter<"player_statistics"> | number;
    champion_id?: Prisma.IntWithAggregatesFilter<"player_statistics"> | number;
    games_played?: Prisma.IntNullableWithAggregatesFilter<"player_statistics"> | number | null;
    wins?: Prisma.IntNullableWithAggregatesFilter<"player_statistics"> | number | null;
    win_rate?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    avg_kills?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    avg_deaths?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    avg_assists?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    avg_cs_per_min?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    avg_gold_per_min?: Prisma.FloatNullableWithAggregatesFilter<"player_statistics"> | number | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"player_statistics"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"player_statistics"> | Date | string;
};
export type player_statisticsCreateInput = {
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    champions: Prisma.championsCreateNestedOneWithoutPlayer_statisticsInput;
    players: Prisma.playersCreateNestedOneWithoutPlayer_statisticsInput;
};
export type player_statisticsUncheckedCreateInput = {
    id?: number;
    player_id: number;
    champion_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsUpdateInput = {
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    champions?: Prisma.championsUpdateOneRequiredWithoutPlayer_statisticsNestedInput;
    players?: Prisma.playersUpdateOneRequiredWithoutPlayer_statisticsNestedInput;
};
export type player_statisticsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsCreateManyInput = {
    id?: number;
    player_id: number;
    champion_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsUpdateManyMutationInput = {
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Player_statisticsListRelationFilter = {
    every?: Prisma.player_statisticsWhereInput;
    some?: Prisma.player_statisticsWhereInput;
    none?: Prisma.player_statisticsWhereInput;
};
export type player_statisticsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type player_statisticsPlayer_idChampion_idCompoundUniqueInput = {
    player_id: number;
    champion_id: number;
};
export type player_statisticsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    avg_kills?: Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrder;
    avg_assists?: Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type player_statisticsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    avg_kills?: Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrder;
    avg_assists?: Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrder;
};
export type player_statisticsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    avg_kills?: Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrder;
    avg_assists?: Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type player_statisticsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    avg_kills?: Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrder;
    avg_assists?: Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type player_statisticsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    games_played?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    avg_kills?: Prisma.SortOrder;
    avg_deaths?: Prisma.SortOrder;
    avg_assists?: Prisma.SortOrder;
    avg_cs_per_min?: Prisma.SortOrder;
    avg_gold_per_min?: Prisma.SortOrder;
};
export type player_statisticsCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput> | Prisma.player_statisticsCreateWithoutChampionsInput[] | Prisma.player_statisticsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutChampionsInput | Prisma.player_statisticsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.player_statisticsCreateManyChampionsInputEnvelope;
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
};
export type player_statisticsUncheckedCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput> | Prisma.player_statisticsCreateWithoutChampionsInput[] | Prisma.player_statisticsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutChampionsInput | Prisma.player_statisticsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.player_statisticsCreateManyChampionsInputEnvelope;
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
};
export type player_statisticsUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput> | Prisma.player_statisticsCreateWithoutChampionsInput[] | Prisma.player_statisticsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutChampionsInput | Prisma.player_statisticsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.player_statisticsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.player_statisticsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.player_statisticsCreateManyChampionsInputEnvelope;
    set?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    disconnect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    delete?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    update?: Prisma.player_statisticsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.player_statisticsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.player_statisticsUpdateManyWithWhereWithoutChampionsInput | Prisma.player_statisticsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
};
export type player_statisticsUncheckedUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput> | Prisma.player_statisticsCreateWithoutChampionsInput[] | Prisma.player_statisticsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutChampionsInput | Prisma.player_statisticsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.player_statisticsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.player_statisticsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.player_statisticsCreateManyChampionsInputEnvelope;
    set?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    disconnect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    delete?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    update?: Prisma.player_statisticsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.player_statisticsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.player_statisticsUpdateManyWithWhereWithoutChampionsInput | Prisma.player_statisticsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
};
export type player_statisticsCreateNestedManyWithoutPlayersInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput> | Prisma.player_statisticsCreateWithoutPlayersInput[] | Prisma.player_statisticsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutPlayersInput | Prisma.player_statisticsCreateOrConnectWithoutPlayersInput[];
    createMany?: Prisma.player_statisticsCreateManyPlayersInputEnvelope;
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
};
export type player_statisticsUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput> | Prisma.player_statisticsCreateWithoutPlayersInput[] | Prisma.player_statisticsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutPlayersInput | Prisma.player_statisticsCreateOrConnectWithoutPlayersInput[];
    createMany?: Prisma.player_statisticsCreateManyPlayersInputEnvelope;
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
};
export type player_statisticsUpdateManyWithoutPlayersNestedInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput> | Prisma.player_statisticsCreateWithoutPlayersInput[] | Prisma.player_statisticsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutPlayersInput | Prisma.player_statisticsCreateOrConnectWithoutPlayersInput[];
    upsert?: Prisma.player_statisticsUpsertWithWhereUniqueWithoutPlayersInput | Prisma.player_statisticsUpsertWithWhereUniqueWithoutPlayersInput[];
    createMany?: Prisma.player_statisticsCreateManyPlayersInputEnvelope;
    set?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    disconnect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    delete?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    update?: Prisma.player_statisticsUpdateWithWhereUniqueWithoutPlayersInput | Prisma.player_statisticsUpdateWithWhereUniqueWithoutPlayersInput[];
    updateMany?: Prisma.player_statisticsUpdateManyWithWhereWithoutPlayersInput | Prisma.player_statisticsUpdateManyWithWhereWithoutPlayersInput[];
    deleteMany?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
};
export type player_statisticsUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput> | Prisma.player_statisticsCreateWithoutPlayersInput[] | Prisma.player_statisticsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.player_statisticsCreateOrConnectWithoutPlayersInput | Prisma.player_statisticsCreateOrConnectWithoutPlayersInput[];
    upsert?: Prisma.player_statisticsUpsertWithWhereUniqueWithoutPlayersInput | Prisma.player_statisticsUpsertWithWhereUniqueWithoutPlayersInput[];
    createMany?: Prisma.player_statisticsCreateManyPlayersInputEnvelope;
    set?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    disconnect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    delete?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    connect?: Prisma.player_statisticsWhereUniqueInput | Prisma.player_statisticsWhereUniqueInput[];
    update?: Prisma.player_statisticsUpdateWithWhereUniqueWithoutPlayersInput | Prisma.player_statisticsUpdateWithWhereUniqueWithoutPlayersInput[];
    updateMany?: Prisma.player_statisticsUpdateManyWithWhereWithoutPlayersInput | Prisma.player_statisticsUpdateManyWithWhereWithoutPlayersInput[];
    deleteMany?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
};
export type player_statisticsCreateWithoutChampionsInput = {
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    players: Prisma.playersCreateNestedOneWithoutPlayer_statisticsInput;
};
export type player_statisticsUncheckedCreateWithoutChampionsInput = {
    id?: number;
    player_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsCreateOrConnectWithoutChampionsInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput>;
};
export type player_statisticsCreateManyChampionsInputEnvelope = {
    data: Prisma.player_statisticsCreateManyChampionsInput | Prisma.player_statisticsCreateManyChampionsInput[];
    skipDuplicates?: boolean;
};
export type player_statisticsUpsertWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.player_statisticsUpdateWithoutChampionsInput, Prisma.player_statisticsUncheckedUpdateWithoutChampionsInput>;
    create: Prisma.XOR<Prisma.player_statisticsCreateWithoutChampionsInput, Prisma.player_statisticsUncheckedCreateWithoutChampionsInput>;
};
export type player_statisticsUpdateWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.player_statisticsUpdateWithoutChampionsInput, Prisma.player_statisticsUncheckedUpdateWithoutChampionsInput>;
};
export type player_statisticsUpdateManyWithWhereWithoutChampionsInput = {
    where: Prisma.player_statisticsScalarWhereInput;
    data: Prisma.XOR<Prisma.player_statisticsUpdateManyMutationInput, Prisma.player_statisticsUncheckedUpdateManyWithoutChampionsInput>;
};
export type player_statisticsScalarWhereInput = {
    AND?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
    OR?: Prisma.player_statisticsScalarWhereInput[];
    NOT?: Prisma.player_statisticsScalarWhereInput | Prisma.player_statisticsScalarWhereInput[];
    id?: Prisma.IntFilter<"player_statistics"> | number;
    player_id?: Prisma.IntFilter<"player_statistics"> | number;
    champion_id?: Prisma.IntFilter<"player_statistics"> | number;
    games_played?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    wins?: Prisma.IntNullableFilter<"player_statistics"> | number | null;
    win_rate?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_kills?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_deaths?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_assists?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_cs_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    avg_gold_per_min?: Prisma.FloatNullableFilter<"player_statistics"> | number | null;
    created_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"player_statistics"> | Date | string;
};
export type player_statisticsCreateWithoutPlayersInput = {
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    champions: Prisma.championsCreateNestedOneWithoutPlayer_statisticsInput;
};
export type player_statisticsUncheckedCreateWithoutPlayersInput = {
    id?: number;
    champion_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsCreateOrConnectWithoutPlayersInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput>;
};
export type player_statisticsCreateManyPlayersInputEnvelope = {
    data: Prisma.player_statisticsCreateManyPlayersInput | Prisma.player_statisticsCreateManyPlayersInput[];
    skipDuplicates?: boolean;
};
export type player_statisticsUpsertWithWhereUniqueWithoutPlayersInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.player_statisticsUpdateWithoutPlayersInput, Prisma.player_statisticsUncheckedUpdateWithoutPlayersInput>;
    create: Prisma.XOR<Prisma.player_statisticsCreateWithoutPlayersInput, Prisma.player_statisticsUncheckedCreateWithoutPlayersInput>;
};
export type player_statisticsUpdateWithWhereUniqueWithoutPlayersInput = {
    where: Prisma.player_statisticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.player_statisticsUpdateWithoutPlayersInput, Prisma.player_statisticsUncheckedUpdateWithoutPlayersInput>;
};
export type player_statisticsUpdateManyWithWhereWithoutPlayersInput = {
    where: Prisma.player_statisticsScalarWhereInput;
    data: Prisma.XOR<Prisma.player_statisticsUpdateManyMutationInput, Prisma.player_statisticsUncheckedUpdateManyWithoutPlayersInput>;
};
export type player_statisticsCreateManyChampionsInput = {
    id?: number;
    player_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsUpdateWithoutChampionsInput = {
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    players?: Prisma.playersUpdateOneRequiredWithoutPlayer_statisticsNestedInput;
};
export type player_statisticsUncheckedUpdateWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsUncheckedUpdateManyWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsCreateManyPlayersInput = {
    id?: number;
    champion_id: number;
    games_played?: number | null;
    wins?: number | null;
    win_rate?: number | null;
    avg_kills?: number | null;
    avg_deaths?: number | null;
    avg_assists?: number | null;
    avg_cs_per_min?: number | null;
    avg_gold_per_min?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type player_statisticsUpdateWithoutPlayersInput = {
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    champions?: Prisma.championsUpdateOneRequiredWithoutPlayer_statisticsNestedInput;
};
export type player_statisticsUncheckedUpdateWithoutPlayersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsUncheckedUpdateManyWithoutPlayersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    games_played?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_kills?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_deaths?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_assists?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_cs_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    avg_gold_per_min?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type player_statisticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    games_played?: boolean;
    wins?: boolean;
    win_rate?: boolean;
    avg_kills?: boolean;
    avg_deaths?: boolean;
    avg_assists?: boolean;
    avg_cs_per_min?: boolean;
    avg_gold_per_min?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player_statistics"]>;
export type player_statisticsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    games_played?: boolean;
    wins?: boolean;
    win_rate?: boolean;
    avg_kills?: boolean;
    avg_deaths?: boolean;
    avg_assists?: boolean;
    avg_cs_per_min?: boolean;
    avg_gold_per_min?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player_statistics"]>;
export type player_statisticsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    games_played?: boolean;
    wins?: boolean;
    win_rate?: boolean;
    avg_kills?: boolean;
    avg_deaths?: boolean;
    avg_assists?: boolean;
    avg_cs_per_min?: boolean;
    avg_gold_per_min?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player_statistics"]>;
export type player_statisticsSelectScalar = {
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    games_played?: boolean;
    wins?: boolean;
    win_rate?: boolean;
    avg_kills?: boolean;
    avg_deaths?: boolean;
    avg_assists?: boolean;
    avg_cs_per_min?: boolean;
    avg_gold_per_min?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type player_statisticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "player_id" | "champion_id" | "games_played" | "wins" | "win_rate" | "avg_kills" | "avg_deaths" | "avg_assists" | "avg_cs_per_min" | "avg_gold_per_min" | "created_at" | "updated_at", ExtArgs["result"]["player_statistics"]>;
export type player_statisticsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type player_statisticsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type player_statisticsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type $player_statisticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "player_statistics";
    objects: {
        champions: Prisma.$championsPayload<ExtArgs>;
        players: Prisma.$playersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        player_id: number;
        champion_id: number;
        games_played: number | null;
        wins: number | null;
        win_rate: number | null;
        avg_kills: number | null;
        avg_deaths: number | null;
        avg_assists: number | null;
        avg_cs_per_min: number | null;
        avg_gold_per_min: number | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["player_statistics"]>;
    composites: {};
};
export type player_statisticsGetPayload<S extends boolean | null | undefined | player_statisticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload, S>;
export type player_statisticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<player_statisticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Player_statisticsCountAggregateInputType | true;
};
export interface player_statisticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['player_statistics'];
        meta: {
            name: 'player_statistics';
        };
    };
    findUnique<T extends player_statisticsFindUniqueArgs>(args: Prisma.SelectSubset<T, player_statisticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends player_statisticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, player_statisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends player_statisticsFindFirstArgs>(args?: Prisma.SelectSubset<T, player_statisticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends player_statisticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, player_statisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends player_statisticsFindManyArgs>(args?: Prisma.SelectSubset<T, player_statisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends player_statisticsCreateArgs>(args: Prisma.SelectSubset<T, player_statisticsCreateArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends player_statisticsCreateManyArgs>(args?: Prisma.SelectSubset<T, player_statisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends player_statisticsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, player_statisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends player_statisticsDeleteArgs>(args: Prisma.SelectSubset<T, player_statisticsDeleteArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends player_statisticsUpdateArgs>(args: Prisma.SelectSubset<T, player_statisticsUpdateArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends player_statisticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, player_statisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends player_statisticsUpdateManyArgs>(args: Prisma.SelectSubset<T, player_statisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends player_statisticsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, player_statisticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends player_statisticsUpsertArgs>(args: Prisma.SelectSubset<T, player_statisticsUpsertArgs<ExtArgs>>): Prisma.Prisma__player_statisticsClient<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends player_statisticsCountArgs>(args?: Prisma.Subset<T, player_statisticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Player_statisticsCountAggregateOutputType> : number>;
    aggregate<T extends Player_statisticsAggregateArgs>(args: Prisma.Subset<T, Player_statisticsAggregateArgs>): Prisma.PrismaPromise<GetPlayer_statisticsAggregateType<T>>;
    groupBy<T extends player_statisticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: player_statisticsGroupByArgs['orderBy'];
    } : {
        orderBy?: player_statisticsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, player_statisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_statisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: player_statisticsFieldRefs;
}
export interface Prisma__player_statisticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    champions<T extends Prisma.championsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.championsDefaultArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    players<T extends Prisma.playersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.playersDefaultArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface player_statisticsFieldRefs {
    readonly id: Prisma.FieldRef<"player_statistics", 'Int'>;
    readonly player_id: Prisma.FieldRef<"player_statistics", 'Int'>;
    readonly champion_id: Prisma.FieldRef<"player_statistics", 'Int'>;
    readonly games_played: Prisma.FieldRef<"player_statistics", 'Int'>;
    readonly wins: Prisma.FieldRef<"player_statistics", 'Int'>;
    readonly win_rate: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly avg_kills: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly avg_deaths: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly avg_assists: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly avg_cs_per_min: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly avg_gold_per_min: Prisma.FieldRef<"player_statistics", 'Float'>;
    readonly created_at: Prisma.FieldRef<"player_statistics", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"player_statistics", 'DateTime'>;
}
export type player_statisticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where: Prisma.player_statisticsWhereUniqueInput;
};
export type player_statisticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where: Prisma.player_statisticsWhereUniqueInput;
};
export type player_statisticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithRelationInput | Prisma.player_statisticsOrderByWithRelationInput[];
    cursor?: Prisma.player_statisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Player_statisticsScalarFieldEnum | Prisma.Player_statisticsScalarFieldEnum[];
};
export type player_statisticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithRelationInput | Prisma.player_statisticsOrderByWithRelationInput[];
    cursor?: Prisma.player_statisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Player_statisticsScalarFieldEnum | Prisma.Player_statisticsScalarFieldEnum[];
};
export type player_statisticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithRelationInput | Prisma.player_statisticsOrderByWithRelationInput[];
    cursor?: Prisma.player_statisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Player_statisticsScalarFieldEnum | Prisma.Player_statisticsScalarFieldEnum[];
};
export type player_statisticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.player_statisticsCreateInput, Prisma.player_statisticsUncheckedCreateInput>;
};
export type player_statisticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.player_statisticsCreateManyInput | Prisma.player_statisticsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type player_statisticsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    data: Prisma.player_statisticsCreateManyInput | Prisma.player_statisticsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.player_statisticsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type player_statisticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.player_statisticsUpdateInput, Prisma.player_statisticsUncheckedUpdateInput>;
    where: Prisma.player_statisticsWhereUniqueInput;
};
export type player_statisticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.player_statisticsUpdateManyMutationInput, Prisma.player_statisticsUncheckedUpdateManyInput>;
    where?: Prisma.player_statisticsWhereInput;
    limit?: number;
};
export type player_statisticsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.player_statisticsUpdateManyMutationInput, Prisma.player_statisticsUncheckedUpdateManyInput>;
    where?: Prisma.player_statisticsWhereInput;
    limit?: number;
    include?: Prisma.player_statisticsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type player_statisticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where: Prisma.player_statisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.player_statisticsCreateInput, Prisma.player_statisticsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.player_statisticsUpdateInput, Prisma.player_statisticsUncheckedUpdateInput>;
};
export type player_statisticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where: Prisma.player_statisticsWhereUniqueInput;
};
export type player_statisticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.player_statisticsWhereInput;
    limit?: number;
};
export type player_statisticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
};
export {};
