// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { GetVenuesData, GetVenuesResponse, GetTeamsData, GetTeamsResponse, GetTeamRosterData, GetTeamRosterResponse, GetTeamSeasonStatsData, GetTeamSeasonStatsResponse, GetPlayerSeasonStatsData, GetPlayerSeasonStatsResponse, GetRecruitsData, GetRecruitsResponse, GetSrsData, GetSrsResponse, GetAdjustedEfficiencyData, GetAdjustedEfficiencyResponse, GetRankingsData, GetRankingsResponse, GetPlaysData, GetPlaysResponse, GetPlaysByPlayerIdData, GetPlaysByPlayerIdResponse, GetPlaysByTeamData, GetPlaysByTeamResponse, GetPlaysByDateData, GetPlaysByDateResponse, GetPlayTypesData, GetPlayTypesResponse, GetLinesData, GetLinesResponse, GetProvidersData, GetProvidersResponse, GetGamesData, GetGamesResponse, GetBroadcastsData, GetBroadcastsResponse, GetGameTeamsData, GetGameTeamsResponse, GetGamePlayersData, GetGamePlayersResponse, GetDraftTeamsData, GetDraftTeamsResponse, GetDraftPositionsData, GetDraftPositionsResponse, GetDraftPicksData, GetDraftPicksResponse, GetConferencesData, GetConferencesResponse, GetConferenceHistoryData, GetConferenceHistoryResponse } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
};

/**
 * Retrieves list of available venues
 */
export const getVenues = <ThrowOnError extends boolean = false>(options?: Options<GetVenuesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetVenuesResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/venues',
        ...options
    });
};

/**
 * Retrieves historical team information
 */
export const getTeams = <ThrowOnError extends boolean = false>(options?: Options<GetTeamsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetTeamsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/teams',
        ...options
    });
};

/**
 * Retrieves team roster information
 */
export const getTeamRoster = <ThrowOnError extends boolean = false>(options: Options<GetTeamRosterData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetTeamRosterResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/teams/roster',
        ...options
    });
};

/**
 * Returns team season statistics by year or team
 */
export const getTeamSeasonStats = <ThrowOnError extends boolean = false>(options?: Options<GetTeamSeasonStatsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetTeamSeasonStatsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/stats/team/season',
        ...options
    });
};

/**
 * Returns player statistics by season
 */
export const getPlayerSeasonStats = <ThrowOnError extends boolean = false>(options: Options<GetPlayerSeasonStatsData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPlayerSeasonStatsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/stats/player/season',
        ...options
    });
};

/**
 * Retrieves historical composite player recruiting ranking and ratings
 */
export const getRecruits = <ThrowOnError extends boolean = false>(options?: Options<GetRecruitsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetRecruitsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/recruiting/players',
        ...options
    });
};

/**
 * Retrieves SRS ratings for the provided season, team, or conference.
 */
export const getSrs = <ThrowOnError extends boolean = false>(options?: Options<GetSrsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetSrsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/ratings/srs',
        ...options
    });
};

/**
 * Retrieves adjusted efficiency ratings for the provided season, team, or conference.
 */
export const getAdjustedEfficiency = <ThrowOnError extends boolean = false>(options?: Options<GetAdjustedEfficiencyData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetAdjustedEfficiencyResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/ratings/adjusted',
        ...options
    });
};

/**
 * Retrieves historical poll data
 */
export const getRankings = <ThrowOnError extends boolean = false>(options?: Options<GetRankingsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetRankingsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/rankings',
        ...options
    });
};

/**
 * Returns all plays for a given game
 */
export const getPlays = <ThrowOnError extends boolean = false>(options: Options<GetPlaysData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPlaysResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/plays/game/{gameId}',
        ...options
    });
};

/**
 * Retrieve all plays for a given player and season
 */
export const getPlaysByPlayerId = <ThrowOnError extends boolean = false>(options: Options<GetPlaysByPlayerIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPlaysByPlayerIdResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/plays/player/{playerId}',
        ...options
    });
};

/**
 * Retrieve all plays for a given team and season
 */
export const getPlaysByTeam = <ThrowOnError extends boolean = false>(options: Options<GetPlaysByTeamData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPlaysByTeamResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/plays/team',
        ...options
    });
};

/**
 * Retrieve all plays for a given UTC date
 */
export const getPlaysByDate = <ThrowOnError extends boolean = false>(options: Options<GetPlaysByDateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPlaysByDateResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/plays/date',
        ...options
    });
};

/**
 * Retrieve list of play types
 */
export const getPlayTypes = <ThrowOnError extends boolean = false>(options?: Options<GetPlayTypesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetPlayTypesResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/plays/types',
        ...options
    });
};

/**
 * Returns betting lines for the first 3000 games that match the provided filters, ordered by start date.
 */
export const getLines = <ThrowOnError extends boolean = false>(options?: Options<GetLinesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetLinesResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/lines',
        ...options
    });
};

export const getProviders = <ThrowOnError extends boolean = false>(options?: Options<GetProvidersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetProvidersResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/lines/providers',
        ...options
    });
};

/**
 * Returns information on the first 3000 games that match the provided filters, ordered by start date.
 */
export const getGames = <ThrowOnError extends boolean = false>(options?: Options<GetGamesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetGamesResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/games',
        ...options
    });
};

/**
 * Returns broadcast information on the first 3000 games that match the provided filters, ordered by start date.
 */
export const getBroadcasts = <ThrowOnError extends boolean = false>(options?: Options<GetBroadcastsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetBroadcastsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/games/media',
        ...options
    });
};

/**
 * Returns team box score statistics and metrics on the first 3000 games that match the provided filters, ordered by start date.
 */
export const getGameTeams = <ThrowOnError extends boolean = false>(options?: Options<GetGameTeamsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetGameTeamsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/games/teams',
        ...options
    });
};

/**
 * Returns player box score statistics and metrics on the first 1000 games that match the provided filters, ordered by start date.
 */
export const getGamePlayers = <ThrowOnError extends boolean = false>(options?: Options<GetGamePlayersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetGamePlayersResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/games/players',
        ...options
    });
};

/**
 * Retrieves list of NBA teams
 */
export const getDraftTeams = <ThrowOnError extends boolean = false>(options?: Options<GetDraftTeamsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetDraftTeamsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/draft/teams',
        ...options
    });
};

/**
 * Retrieves list of position names for NBA draft prospects
 */
export const getDraftPositions = <ThrowOnError extends boolean = false>(options?: Options<GetDraftPositionsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetDraftPositionsResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/draft/positions',
        ...options
    });
};

/**
 * Retrieves historical NBA draft picks
 */
export const getDraftPicks = <ThrowOnError extends boolean = false>(options?: Options<GetDraftPicksData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetDraftPicksResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/draft/picks',
        ...options
    });
};

/**
 * Retrieves list of available conferences
 */
export const getConferences = <ThrowOnError extends boolean = false>(options?: Options<GetConferencesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetConferencesResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/conferences',
        ...options
    });
};

/**
 * Retrieves historical conference membership information
 */
export const getConferenceHistory = <ThrowOnError extends boolean = false>(options?: Options<GetConferenceHistoryData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetConferenceHistoryResponse, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'bearer',
                type: 'http'
            }
        ],
        url: '/conferences/history',
        ...options
    });
};