import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type playersModel = runtime.Types.Result.DefaultSelection<Prisma.$playersPayload>;
export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null;
    _avg: PlayersAvgAggregateOutputType | null;
    _sum: PlayersSumAggregateOutputType | null;
    _min: PlayersMinAggregateOutputType | null;
    _max: PlayersMaxAggregateOutputType | null;
};
export type PlayersAvgAggregateOutputType = {
    id: number | null;
    summoner_level: number | null;
    league_points: number | null;
    wins: number | null;
    losses: number | null;
};
export type PlayersSumAggregateOutputType = {
    id: number | null;
    summoner_level: number | null;
    league_points: number | null;
    wins: number | null;
    losses: number | null;
};
export type PlayersMinAggregateOutputType = {
    id: number | null;
    riot_id: string | null;
    summoner_name: string | null;
    tag_line: string | null;
    profile_icon_url: string | null;
    summoner_level: number | null;
    rank: string | null;
    tier: string | null;
    league_points: number | null;
    wins: number | null;
    losses: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PlayersMaxAggregateOutputType = {
    id: number | null;
    riot_id: string | null;
    summoner_name: string | null;
    tag_line: string | null;
    profile_icon_url: string | null;
    summoner_level: number | null;
    rank: string | null;
    tier: string | null;
    league_points: number | null;
    wins: number | null;
    losses: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PlayersCountAggregateOutputType = {
    id: number;
    riot_id: number;
    summoner_name: number;
    tag_line: number;
    profile_icon_url: number;
    summoner_level: number;
    rank: number;
    tier: number;
    league_points: number;
    wins: number;
    losses: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PlayersAvgAggregateInputType = {
    id?: true;
    summoner_level?: true;
    league_points?: true;
    wins?: true;
    losses?: true;
};
export type PlayersSumAggregateInputType = {
    id?: true;
    summoner_level?: true;
    league_points?: true;
    wins?: true;
    losses?: true;
};
export type PlayersMinAggregateInputType = {
    id?: true;
    riot_id?: true;
    summoner_name?: true;
    tag_line?: true;
    profile_icon_url?: true;
    summoner_level?: true;
    rank?: true;
    tier?: true;
    league_points?: true;
    wins?: true;
    losses?: true;
    created_at?: true;
    updated_at?: true;
};
export type PlayersMaxAggregateInputType = {
    id?: true;
    riot_id?: true;
    summoner_name?: true;
    tag_line?: true;
    profile_icon_url?: true;
    summoner_level?: true;
    rank?: true;
    tier?: true;
    league_points?: true;
    wins?: true;
    losses?: true;
    created_at?: true;
    updated_at?: true;
};
export type PlayersCountAggregateInputType = {
    id?: true;
    riot_id?: true;
    summoner_name?: true;
    tag_line?: true;
    profile_icon_url?: true;
    summoner_level?: true;
    rank?: true;
    tier?: true;
    league_points?: true;
    wins?: true;
    losses?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PlayersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.playersWhereInput;
    orderBy?: Prisma.playersOrderByWithRelationInput | Prisma.playersOrderByWithRelationInput[];
    cursor?: Prisma.playersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlayersCountAggregateInputType;
    _avg?: PlayersAvgAggregateInputType;
    _sum?: PlayersSumAggregateInputType;
    _min?: PlayersMinAggregateInputType;
    _max?: PlayersMaxAggregateInputType;
};
export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayers[P]> : Prisma.GetScalarType<T[P], AggregatePlayers[P]>;
};
export type playersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.playersWhereInput;
    orderBy?: Prisma.playersOrderByWithAggregationInput | Prisma.playersOrderByWithAggregationInput[];
    by: Prisma.PlayersScalarFieldEnum[] | Prisma.PlayersScalarFieldEnum;
    having?: Prisma.playersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayersCountAggregateInputType | true;
    _avg?: PlayersAvgAggregateInputType;
    _sum?: PlayersSumAggregateInputType;
    _min?: PlayersMinAggregateInputType;
    _max?: PlayersMaxAggregateInputType;
};
export type PlayersGroupByOutputType = {
    id: number;
    riot_id: string;
    summoner_name: string;
    tag_line: string | null;
    profile_icon_url: string | null;
    summoner_level: number;
    rank: string | null;
    tier: string | null;
    league_points: number | null;
    wins: number | null;
    losses: number | null;
    created_at: Date;
    updated_at: Date;
    _count: PlayersCountAggregateOutputType | null;
    _avg: PlayersAvgAggregateOutputType | null;
    _sum: PlayersSumAggregateOutputType | null;
    _min: PlayersMinAggregateOutputType | null;
    _max: PlayersMaxAggregateOutputType | null;
};
type GetPlayersGroupByPayload<T extends playersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayersGroupByOutputType[P]>;
}>>;
export type playersWhereInput = {
    AND?: Prisma.playersWhereInput | Prisma.playersWhereInput[];
    OR?: Prisma.playersWhereInput[];
    NOT?: Prisma.playersWhereInput | Prisma.playersWhereInput[];
    id?: Prisma.IntFilter<"players"> | number;
    riot_id?: Prisma.StringFilter<"players"> | string;
    summoner_name?: Prisma.StringFilter<"players"> | string;
    tag_line?: Prisma.StringNullableFilter<"players"> | string | null;
    profile_icon_url?: Prisma.StringNullableFilter<"players"> | string | null;
    summoner_level?: Prisma.IntFilter<"players"> | number;
    rank?: Prisma.StringNullableFilter<"players"> | string | null;
    tier?: Prisma.StringNullableFilter<"players"> | string | null;
    league_points?: Prisma.IntNullableFilter<"players"> | number | null;
    wins?: Prisma.IntNullableFilter<"players"> | number | null;
    losses?: Prisma.IntNullableFilter<"players"> | number | null;
    created_at?: Prisma.DateTimeFilter<"players"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"players"> | Date | string;
    favorite_champions?: Prisma.Favorite_championsListRelationFilter;
    player_statistics?: Prisma.Player_statisticsListRelationFilter;
};
export type playersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    summoner_name?: Prisma.SortOrder;
    tag_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile_icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    rank?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    league_points?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrderInput | Prisma.SortOrder;
    losses?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    favorite_champions?: Prisma.favorite_championsOrderByRelationAggregateInput;
    player_statistics?: Prisma.player_statisticsOrderByRelationAggregateInput;
};
export type playersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    riot_id?: string;
    AND?: Prisma.playersWhereInput | Prisma.playersWhereInput[];
    OR?: Prisma.playersWhereInput[];
    NOT?: Prisma.playersWhereInput | Prisma.playersWhereInput[];
    summoner_name?: Prisma.StringFilter<"players"> | string;
    tag_line?: Prisma.StringNullableFilter<"players"> | string | null;
    profile_icon_url?: Prisma.StringNullableFilter<"players"> | string | null;
    summoner_level?: Prisma.IntFilter<"players"> | number;
    rank?: Prisma.StringNullableFilter<"players"> | string | null;
    tier?: Prisma.StringNullableFilter<"players"> | string | null;
    league_points?: Prisma.IntNullableFilter<"players"> | number | null;
    wins?: Prisma.IntNullableFilter<"players"> | number | null;
    losses?: Prisma.IntNullableFilter<"players"> | number | null;
    created_at?: Prisma.DateTimeFilter<"players"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"players"> | Date | string;
    favorite_champions?: Prisma.Favorite_championsListRelationFilter;
    player_statistics?: Prisma.Player_statisticsListRelationFilter;
}, "id" | "riot_id">;
export type playersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    summoner_name?: Prisma.SortOrder;
    tag_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile_icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    rank?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    league_points?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrderInput | Prisma.SortOrder;
    losses?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.playersCountOrderByAggregateInput;
    _avg?: Prisma.playersAvgOrderByAggregateInput;
    _max?: Prisma.playersMaxOrderByAggregateInput;
    _min?: Prisma.playersMinOrderByAggregateInput;
    _sum?: Prisma.playersSumOrderByAggregateInput;
};
export type playersScalarWhereWithAggregatesInput = {
    AND?: Prisma.playersScalarWhereWithAggregatesInput | Prisma.playersScalarWhereWithAggregatesInput[];
    OR?: Prisma.playersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.playersScalarWhereWithAggregatesInput | Prisma.playersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"players"> | number;
    riot_id?: Prisma.StringWithAggregatesFilter<"players"> | string;
    summoner_name?: Prisma.StringWithAggregatesFilter<"players"> | string;
    tag_line?: Prisma.StringNullableWithAggregatesFilter<"players"> | string | null;
    profile_icon_url?: Prisma.StringNullableWithAggregatesFilter<"players"> | string | null;
    summoner_level?: Prisma.IntWithAggregatesFilter<"players"> | number;
    rank?: Prisma.StringNullableWithAggregatesFilter<"players"> | string | null;
    tier?: Prisma.StringNullableWithAggregatesFilter<"players"> | string | null;
    league_points?: Prisma.IntNullableWithAggregatesFilter<"players"> | number | null;
    wins?: Prisma.IntNullableWithAggregatesFilter<"players"> | number | null;
    losses?: Prisma.IntNullableWithAggregatesFilter<"players"> | number | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"players"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"players"> | Date | string;
};
export type playersCreateInput = {
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    favorite_champions?: Prisma.favorite_championsCreateNestedManyWithoutPlayersInput;
    player_statistics?: Prisma.player_statisticsCreateNestedManyWithoutPlayersInput;
};
export type playersUncheckedCreateInput = {
    id?: number;
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedCreateNestedManyWithoutPlayersInput;
    player_statistics?: Prisma.player_statisticsUncheckedCreateNestedManyWithoutPlayersInput;
};
export type playersUpdateInput = {
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUpdateManyWithoutPlayersNestedInput;
    player_statistics?: Prisma.player_statisticsUpdateManyWithoutPlayersNestedInput;
};
export type playersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedUpdateManyWithoutPlayersNestedInput;
    player_statistics?: Prisma.player_statisticsUncheckedUpdateManyWithoutPlayersNestedInput;
};
export type playersCreateManyInput = {
    id?: number;
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
};
export type playersUpdateManyMutationInput = {
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type playersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayersScalarRelationFilter = {
    is?: Prisma.playersWhereInput;
    isNot?: Prisma.playersWhereInput;
};
export type playersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    summoner_name?: Prisma.SortOrder;
    tag_line?: Prisma.SortOrder;
    profile_icon_url?: Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    league_points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type playersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    league_points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
};
export type playersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    summoner_name?: Prisma.SortOrder;
    tag_line?: Prisma.SortOrder;
    profile_icon_url?: Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    league_points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type playersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    summoner_name?: Prisma.SortOrder;
    tag_line?: Prisma.SortOrder;
    profile_icon_url?: Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    league_points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type playersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summoner_level?: Prisma.SortOrder;
    league_points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
};
export type playersCreateNestedOneWithoutFavorite_championsInput = {
    create?: Prisma.XOR<Prisma.playersCreateWithoutFavorite_championsInput, Prisma.playersUncheckedCreateWithoutFavorite_championsInput>;
    connectOrCreate?: Prisma.playersCreateOrConnectWithoutFavorite_championsInput;
    connect?: Prisma.playersWhereUniqueInput;
};
export type playersUpdateOneRequiredWithoutFavorite_championsNestedInput = {
    create?: Prisma.XOR<Prisma.playersCreateWithoutFavorite_championsInput, Prisma.playersUncheckedCreateWithoutFavorite_championsInput>;
    connectOrCreate?: Prisma.playersCreateOrConnectWithoutFavorite_championsInput;
    upsert?: Prisma.playersUpsertWithoutFavorite_championsInput;
    connect?: Prisma.playersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.playersUpdateToOneWithWhereWithoutFavorite_championsInput, Prisma.playersUpdateWithoutFavorite_championsInput>, Prisma.playersUncheckedUpdateWithoutFavorite_championsInput>;
};
export type playersCreateNestedOneWithoutPlayer_statisticsInput = {
    create?: Prisma.XOR<Prisma.playersCreateWithoutPlayer_statisticsInput, Prisma.playersUncheckedCreateWithoutPlayer_statisticsInput>;
    connectOrCreate?: Prisma.playersCreateOrConnectWithoutPlayer_statisticsInput;
    connect?: Prisma.playersWhereUniqueInput;
};
export type playersUpdateOneRequiredWithoutPlayer_statisticsNestedInput = {
    create?: Prisma.XOR<Prisma.playersCreateWithoutPlayer_statisticsInput, Prisma.playersUncheckedCreateWithoutPlayer_statisticsInput>;
    connectOrCreate?: Prisma.playersCreateOrConnectWithoutPlayer_statisticsInput;
    upsert?: Prisma.playersUpsertWithoutPlayer_statisticsInput;
    connect?: Prisma.playersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.playersUpdateToOneWithWhereWithoutPlayer_statisticsInput, Prisma.playersUpdateWithoutPlayer_statisticsInput>, Prisma.playersUncheckedUpdateWithoutPlayer_statisticsInput>;
};
export type playersCreateWithoutFavorite_championsInput = {
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    player_statistics?: Prisma.player_statisticsCreateNestedManyWithoutPlayersInput;
};
export type playersUncheckedCreateWithoutFavorite_championsInput = {
    id?: number;
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    player_statistics?: Prisma.player_statisticsUncheckedCreateNestedManyWithoutPlayersInput;
};
export type playersCreateOrConnectWithoutFavorite_championsInput = {
    where: Prisma.playersWhereUniqueInput;
    create: Prisma.XOR<Prisma.playersCreateWithoutFavorite_championsInput, Prisma.playersUncheckedCreateWithoutFavorite_championsInput>;
};
export type playersUpsertWithoutFavorite_championsInput = {
    update: Prisma.XOR<Prisma.playersUpdateWithoutFavorite_championsInput, Prisma.playersUncheckedUpdateWithoutFavorite_championsInput>;
    create: Prisma.XOR<Prisma.playersCreateWithoutFavorite_championsInput, Prisma.playersUncheckedCreateWithoutFavorite_championsInput>;
    where?: Prisma.playersWhereInput;
};
export type playersUpdateToOneWithWhereWithoutFavorite_championsInput = {
    where?: Prisma.playersWhereInput;
    data: Prisma.XOR<Prisma.playersUpdateWithoutFavorite_championsInput, Prisma.playersUncheckedUpdateWithoutFavorite_championsInput>;
};
export type playersUpdateWithoutFavorite_championsInput = {
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player_statistics?: Prisma.player_statisticsUpdateManyWithoutPlayersNestedInput;
};
export type playersUncheckedUpdateWithoutFavorite_championsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player_statistics?: Prisma.player_statisticsUncheckedUpdateManyWithoutPlayersNestedInput;
};
export type playersCreateWithoutPlayer_statisticsInput = {
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    favorite_champions?: Prisma.favorite_championsCreateNestedManyWithoutPlayersInput;
};
export type playersUncheckedCreateWithoutPlayer_statisticsInput = {
    id?: number;
    riot_id: string;
    summoner_name: string;
    tag_line?: string | null;
    profile_icon_url?: string | null;
    summoner_level: number;
    rank?: string | null;
    tier?: string | null;
    league_points?: number | null;
    wins?: number | null;
    losses?: number | null;
    created_at: Date | string;
    updated_at: Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedCreateNestedManyWithoutPlayersInput;
};
export type playersCreateOrConnectWithoutPlayer_statisticsInput = {
    where: Prisma.playersWhereUniqueInput;
    create: Prisma.XOR<Prisma.playersCreateWithoutPlayer_statisticsInput, Prisma.playersUncheckedCreateWithoutPlayer_statisticsInput>;
};
export type playersUpsertWithoutPlayer_statisticsInput = {
    update: Prisma.XOR<Prisma.playersUpdateWithoutPlayer_statisticsInput, Prisma.playersUncheckedUpdateWithoutPlayer_statisticsInput>;
    create: Prisma.XOR<Prisma.playersCreateWithoutPlayer_statisticsInput, Prisma.playersUncheckedCreateWithoutPlayer_statisticsInput>;
    where?: Prisma.playersWhereInput;
};
export type playersUpdateToOneWithWhereWithoutPlayer_statisticsInput = {
    where?: Prisma.playersWhereInput;
    data: Prisma.XOR<Prisma.playersUpdateWithoutPlayer_statisticsInput, Prisma.playersUncheckedUpdateWithoutPlayer_statisticsInput>;
};
export type playersUpdateWithoutPlayer_statisticsInput = {
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUpdateManyWithoutPlayersNestedInput;
};
export type playersUncheckedUpdateWithoutPlayer_statisticsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    riot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    summoner_name?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profile_icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summoner_level?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    league_points?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wins?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    losses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedUpdateManyWithoutPlayersNestedInput;
};
export type PlayersCountOutputType = {
    favorite_champions: number;
    player_statistics: number;
};
export type PlayersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favorite_champions?: boolean | PlayersCountOutputTypeCountFavorite_championsArgs;
    player_statistics?: boolean | PlayersCountOutputTypeCountPlayer_statisticsArgs;
};
export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlayersCountOutputTypeSelect<ExtArgs> | null;
};
export type PlayersCountOutputTypeCountFavorite_championsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.favorite_championsWhereInput;
};
export type PlayersCountOutputTypeCountPlayer_statisticsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.player_statisticsWhereInput;
};
export type playersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riot_id?: boolean;
    summoner_name?: boolean;
    tag_line?: boolean;
    profile_icon_url?: boolean;
    summoner_level?: boolean;
    rank?: boolean;
    tier?: boolean;
    league_points?: boolean;
    wins?: boolean;
    losses?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    favorite_champions?: boolean | Prisma.players$favorite_championsArgs<ExtArgs>;
    player_statistics?: boolean | Prisma.players$player_statisticsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["players"]>;
export type playersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riot_id?: boolean;
    summoner_name?: boolean;
    tag_line?: boolean;
    profile_icon_url?: boolean;
    summoner_level?: boolean;
    rank?: boolean;
    tier?: boolean;
    league_points?: boolean;
    wins?: boolean;
    losses?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["players"]>;
export type playersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riot_id?: boolean;
    summoner_name?: boolean;
    tag_line?: boolean;
    profile_icon_url?: boolean;
    summoner_level?: boolean;
    rank?: boolean;
    tier?: boolean;
    league_points?: boolean;
    wins?: boolean;
    losses?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["players"]>;
export type playersSelectScalar = {
    id?: boolean;
    riot_id?: boolean;
    summoner_name?: boolean;
    tag_line?: boolean;
    profile_icon_url?: boolean;
    summoner_level?: boolean;
    rank?: boolean;
    tier?: boolean;
    league_points?: boolean;
    wins?: boolean;
    losses?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type playersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "riot_id" | "summoner_name" | "tag_line" | "profile_icon_url" | "summoner_level" | "rank" | "tier" | "league_points" | "wins" | "losses" | "created_at" | "updated_at", ExtArgs["result"]["players"]>;
export type playersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favorite_champions?: boolean | Prisma.players$favorite_championsArgs<ExtArgs>;
    player_statistics?: boolean | Prisma.players$player_statisticsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type playersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type playersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $playersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "players";
    objects: {
        favorite_champions: Prisma.$favorite_championsPayload<ExtArgs>[];
        player_statistics: Prisma.$player_statisticsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        riot_id: string;
        summoner_name: string;
        tag_line: string | null;
        profile_icon_url: string | null;
        summoner_level: number;
        rank: string | null;
        tier: string | null;
        league_points: number | null;
        wins: number | null;
        losses: number | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["players"]>;
    composites: {};
};
export type playersGetPayload<S extends boolean | null | undefined | playersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$playersPayload, S>;
export type playersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<playersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayersCountAggregateInputType | true;
};
export interface playersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['players'];
        meta: {
            name: 'players';
        };
    };
    findUnique<T extends playersFindUniqueArgs>(args: Prisma.SelectSubset<T, playersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends playersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, playersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends playersFindFirstArgs>(args?: Prisma.SelectSubset<T, playersFindFirstArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends playersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, playersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends playersFindManyArgs>(args?: Prisma.SelectSubset<T, playersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends playersCreateArgs>(args: Prisma.SelectSubset<T, playersCreateArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends playersCreateManyArgs>(args?: Prisma.SelectSubset<T, playersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends playersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, playersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends playersDeleteArgs>(args: Prisma.SelectSubset<T, playersDeleteArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends playersUpdateArgs>(args: Prisma.SelectSubset<T, playersUpdateArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends playersDeleteManyArgs>(args?: Prisma.SelectSubset<T, playersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends playersUpdateManyArgs>(args: Prisma.SelectSubset<T, playersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends playersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, playersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends playersUpsertArgs>(args: Prisma.SelectSubset<T, playersUpsertArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends playersCountArgs>(args?: Prisma.Subset<T, playersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayersCountAggregateOutputType> : number>;
    aggregate<T extends PlayersAggregateArgs>(args: Prisma.Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>;
    groupBy<T extends playersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: playersGroupByArgs['orderBy'];
    } : {
        orderBy?: playersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: playersFieldRefs;
}
export interface Prisma__playersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    favorite_champions<T extends Prisma.players$favorite_championsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.players$favorite_championsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    player_statistics<T extends Prisma.players$player_statisticsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.players$player_statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface playersFieldRefs {
    readonly id: Prisma.FieldRef<"players", 'Int'>;
    readonly riot_id: Prisma.FieldRef<"players", 'String'>;
    readonly summoner_name: Prisma.FieldRef<"players", 'String'>;
    readonly tag_line: Prisma.FieldRef<"players", 'String'>;
    readonly profile_icon_url: Prisma.FieldRef<"players", 'String'>;
    readonly summoner_level: Prisma.FieldRef<"players", 'Int'>;
    readonly rank: Prisma.FieldRef<"players", 'String'>;
    readonly tier: Prisma.FieldRef<"players", 'String'>;
    readonly league_points: Prisma.FieldRef<"players", 'Int'>;
    readonly wins: Prisma.FieldRef<"players", 'Int'>;
    readonly losses: Prisma.FieldRef<"players", 'Int'>;
    readonly created_at: Prisma.FieldRef<"players", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"players", 'DateTime'>;
}
export type playersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where: Prisma.playersWhereUniqueInput;
};
export type playersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where: Prisma.playersWhereUniqueInput;
};
export type playersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where?: Prisma.playersWhereInput;
    orderBy?: Prisma.playersOrderByWithRelationInput | Prisma.playersOrderByWithRelationInput[];
    cursor?: Prisma.playersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayersScalarFieldEnum | Prisma.PlayersScalarFieldEnum[];
};
export type playersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where?: Prisma.playersWhereInput;
    orderBy?: Prisma.playersOrderByWithRelationInput | Prisma.playersOrderByWithRelationInput[];
    cursor?: Prisma.playersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayersScalarFieldEnum | Prisma.PlayersScalarFieldEnum[];
};
export type playersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where?: Prisma.playersWhereInput;
    orderBy?: Prisma.playersOrderByWithRelationInput | Prisma.playersOrderByWithRelationInput[];
    cursor?: Prisma.playersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayersScalarFieldEnum | Prisma.PlayersScalarFieldEnum[];
};
export type playersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.playersCreateInput, Prisma.playersUncheckedCreateInput>;
};
export type playersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.playersCreateManyInput | Prisma.playersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type playersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    data: Prisma.playersCreateManyInput | Prisma.playersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type playersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.playersUpdateInput, Prisma.playersUncheckedUpdateInput>;
    where: Prisma.playersWhereUniqueInput;
};
export type playersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.playersUpdateManyMutationInput, Prisma.playersUncheckedUpdateManyInput>;
    where?: Prisma.playersWhereInput;
    limit?: number;
};
export type playersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.playersUpdateManyMutationInput, Prisma.playersUncheckedUpdateManyInput>;
    where?: Prisma.playersWhereInput;
    limit?: number;
};
export type playersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where: Prisma.playersWhereUniqueInput;
    create: Prisma.XOR<Prisma.playersCreateInput, Prisma.playersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.playersUpdateInput, Prisma.playersUncheckedUpdateInput>;
};
export type playersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
    where: Prisma.playersWhereUniqueInput;
};
export type playersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.playersWhereInput;
    limit?: number;
};
export type players$favorite_championsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where?: Prisma.favorite_championsWhereInput;
    orderBy?: Prisma.favorite_championsOrderByWithRelationInput | Prisma.favorite_championsOrderByWithRelationInput[];
    cursor?: Prisma.favorite_championsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Favorite_championsScalarFieldEnum | Prisma.Favorite_championsScalarFieldEnum[];
};
export type players$player_statisticsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type playersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.playersSelect<ExtArgs> | null;
    omit?: Prisma.playersOmit<ExtArgs> | null;
    include?: Prisma.playersInclude<ExtArgs> | null;
};
export {};
