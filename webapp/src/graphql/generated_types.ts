import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';

import {MetricType} from 'src/types/playbook';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Checklist = {
    __typename?: 'Checklist';
    items: Array<ChecklistItem>;
    title: Scalars['String'];
};

export type ChecklistItem = {
    __typename?: 'ChecklistItem';
    assigneeID: Scalars['String'];
    assigneeModified: Scalars['Float'];
    command: Scalars['String'];
    commandLastRun: Scalars['Float'];
    description: Scalars['String'];
    dueDate: Scalars['Float'];
    state: Scalars['String'];
    stateModified: Scalars['Float'];
    title: Scalars['String'];
};

export type ChecklistItemUpdates = {
    assigneeID: Scalars['String'];
    assigneeModified: Scalars['Float'];
    command: Scalars['String'];
    commandLastRun: Scalars['Float'];
    description: Scalars['String'];
    dueDate: Scalars['Float'];
    state: Scalars['String'];
    stateModified: Scalars['Float'];
    title: Scalars['String'];
};

export type ChecklistUpdates = {
    items: Array<ChecklistItemUpdates>;
    title: Scalars['String'];
};

export type Member = {
    __typename?: 'Member';
    roles: Array<Scalars['String']>;
    schemeRoles: Array<Scalars['String']>;
    userID: Scalars['String'];
};

export {MetricType};

export type Mutation = {
    __typename?: 'Mutation';
    addMetric: Scalars['String'];
    addPlaybookMember: Scalars['String'];
    deleteMetric: Scalars['String'];
    removePlaybookMember: Scalars['String'];
    updateMetric: Scalars['String'];
    updatePlaybook: Scalars['String'];
    updateRun: Scalars['String'];
};

export type MutationAddMetricArgs = {
    description: Scalars['String'];
    playbookID: Scalars['String'];
    target?: InputMaybe<Scalars['Int']>;
    title: Scalars['String'];
    type: Scalars['String'];
};

export type MutationAddPlaybookMemberArgs = {
    playbookID: Scalars['String'];
    userID: Scalars['String'];
};

export type MutationDeleteMetricArgs = {
    id: Scalars['String'];
};

export type MutationRemovePlaybookMemberArgs = {
    playbookID: Scalars['String'];
    userID: Scalars['String'];
};

export type MutationUpdateMetricArgs = {
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['String'];
    target?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type MutationUpdatePlaybookArgs = {
    id: Scalars['String'];
    updates: PlaybookUpdates;
};

export type MutationUpdateRunArgs = {
    id: Scalars['String'];
    updates: RunUpdates;
};

export type Playbook = {
    __typename?: 'Playbook';
    broadcastChannelIDs: Array<Scalars['String']>;
    broadcastEnabled: Scalars['Boolean'];
    categorizeChannelEnabled: Scalars['Boolean'];
    categoryName: Scalars['String'];
    channelNameTemplate: Scalars['String'];
    checklists: Array<Checklist>;
    createPublicPlaybookRun: Scalars['Boolean'];
    defaultOwnerEnabled: Scalars['Boolean'];
    defaultOwnerID: Scalars['String'];
    defaultPlaybookAdminRole: Scalars['String'];
    defaultPlaybookMemberRole: Scalars['String'];
    defaultRunAdminRole: Scalars['String'];
    defaultRunMemberRole: Scalars['String'];
    deleteAt: Scalars['Float'];
    description: Scalars['String'];
    id: Scalars['String'];
    inviteUsersEnabled: Scalars['Boolean'];
    invitedGroupIDs: Array<Scalars['String']>;
    invitedUserIDs: Array<Scalars['String']>;
    isFavorite: Scalars['Boolean'];
    members: Array<Member>;
    messageOnJoin: Scalars['String'];
    messageOnJoinEnabled: Scalars['Boolean'];
    metrics: Array<PlaybookMetricConfig>;
    public: Scalars['Boolean'];
    reminderMessageTemplate: Scalars['String'];
    reminderTimerDefaultSeconds: Scalars['Float'];
    retrospectiveEnabled: Scalars['Boolean'];
    retrospectiveReminderIntervalSeconds: Scalars['Float'];
    retrospectiveTemplate: Scalars['String'];
    runSummaryTemplate: Scalars['String'];
    runSummaryTemplateEnabled: Scalars['Boolean'];
    signalAnyKeywords: Array<Scalars['String']>;
    signalAnyKeywordsEnabled: Scalars['Boolean'];
    statusUpdateEnabled: Scalars['Boolean'];
    teamID: Scalars['String'];
    title: Scalars['String'];
    webhookOnCreationEnabled: Scalars['Boolean'];
    webhookOnCreationURLs: Array<Scalars['String']>;
    webhookOnStatusUpdateEnabled: Scalars['Boolean'];
    webhookOnStatusUpdateURLs: Array<Scalars['String']>;
};

export type PlaybookMetricConfig = {
    __typename?: 'PlaybookMetricConfig';
    description: Scalars['String'];
    id: Scalars['String'];
    target?: Maybe<Scalars['Int']>;
    title: Scalars['String'];
    type: MetricType;
};

export type PlaybookUpdates = {
    broadcastChannelIDs?: InputMaybe<Array<Scalars['String']>>;
    broadcastEnabled?: InputMaybe<Scalars['Boolean']>;
    categorizeChannelEnabled?: InputMaybe<Scalars['Boolean']>;
    categoryName?: InputMaybe<Scalars['String']>;
    channelNameTemplate?: InputMaybe<Scalars['String']>;
    checklists?: InputMaybe<Array<ChecklistUpdates>>;
    createPublicPlaybookRun?: InputMaybe<Scalars['Boolean']>;
    defaultOwnerEnabled?: InputMaybe<Scalars['Boolean']>;
    defaultOwnerID?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    inviteUsersEnabled?: InputMaybe<Scalars['Boolean']>;
    invitedGroupIDs?: InputMaybe<Array<Scalars['String']>>;
    invitedUserIDs?: InputMaybe<Array<Scalars['String']>>;
    isFavorite?: InputMaybe<Scalars['Boolean']>;
    messageOnJoin?: InputMaybe<Scalars['String']>;
    messageOnJoinEnabled?: InputMaybe<Scalars['Boolean']>;
    public?: InputMaybe<Scalars['Boolean']>;
    reminderMessageTemplate?: InputMaybe<Scalars['String']>;
    reminderTimerDefaultSeconds?: InputMaybe<Scalars['Float']>;
    retrospectiveEnabled?: InputMaybe<Scalars['Boolean']>;
    retrospectiveReminderIntervalSeconds?: InputMaybe<Scalars['Float']>;
    retrospectiveTemplate?: InputMaybe<Scalars['String']>;
    runSummaryTemplate?: InputMaybe<Scalars['String']>;
    runSummaryTemplateEnabled?: InputMaybe<Scalars['Boolean']>;
    signalAnyKeywords?: InputMaybe<Array<Scalars['String']>>;
    signalAnyKeywordsEnabled?: InputMaybe<Scalars['Boolean']>;
    statusUpdateEnabled?: InputMaybe<Scalars['Boolean']>;
    title?: InputMaybe<Scalars['String']>;
    webhookOnCreationEnabled?: InputMaybe<Scalars['Boolean']>;
    webhookOnCreationURLs?: InputMaybe<Array<Scalars['String']>>;
    webhookOnStatusUpdateEnabled?: InputMaybe<Scalars['Boolean']>;
    webhookOnStatusUpdateURLs?: InputMaybe<Array<Scalars['String']>>;
};

export type Query = {
    __typename?: 'Query';
    playbook?: Maybe<Playbook>;
    playbooks: Array<Playbook>;
    runs: Array<Run>;
};

export type QueryPlaybookArgs = {
    id: Scalars['String'];
};

export type QueryPlaybooksArgs = {
    direction?: InputMaybe<Scalars['String']>;
    searchTerm?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Scalars['String']>;
    teamID?: InputMaybe<Scalars['String']>;
    withArchived?: InputMaybe<Scalars['Boolean']>;
    withMembershipOnly?: InputMaybe<Scalars['Boolean']>;
};

export type QueryRunsArgs = {
    participantOrFollowerID?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Scalars['String']>;
    statuses?: InputMaybe<Array<Scalars['String']>>;
    teamID?: InputMaybe<Scalars['String']>;
};

export type Run = {
    __typename?: 'Run';
    id: Scalars['String'];
    isFavorite: Scalars['Boolean'];
    name: Scalars['String'];
};

export type RunUpdates = {
    isFavorite?: InputMaybe<Scalars['Boolean']>;
};

export type PlaybookQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type PlaybookQuery = { __typename?: 'Query', playbook?: { __typename?: 'Playbook', id: string, title: string, description: string, public: boolean, team_id: string, delete_at: number, default_playbook_member_role: string, invited_user_ids: Array<string>, broadcast_channel_ids: Array<string>, webhook_on_creation_urls: Array<string>, reminder_timer_default_seconds: number, reminder_message_template: string, broadcast_enabled: boolean, webhook_on_status_update_enabled: boolean, webhook_on_status_update_urls: Array<string>, status_update_enabled: boolean, retrospective_enabled: boolean, retrospective_reminder_interval_seconds: number, retrospective_template: string, default_owner_id: string, run_summary_template: string, run_summary_template_enabled: boolean, message_on_join: string, category_name: string, invite_users_enabled: boolean, default_owner_enabled: boolean, webhook_on_creation_enabled: boolean, message_on_join_enabled: boolean, categorize_channel_enabled: boolean, create_public_playbook_run: boolean, channel_name_template: string, is_favorite: boolean, checklists: Array<{ __typename?: 'Checklist', title: string, items: Array<{ __typename?: 'ChecklistItem', title: string, description: string, state: string, command: string, state_modified: number, assignee_id: string, assignee_modified: number, command_last_run: number, due_date: number }> }>, members: Array<{ __typename?: 'Member', roles: Array<string>, user_id: string, scheme_roles: Array<string> }>, metrics: Array<{ __typename?: 'PlaybookMetricConfig', id: string, title: string, description: string, type: MetricType, target?: number | null }> } | null };

export type UpdatePlaybookMutationVariables = Exact<{
    id: Scalars['String'];
    updates: PlaybookUpdates;
}>;

export type UpdatePlaybookMutation = { __typename?: 'Mutation', updatePlaybook: string };

export type PlaybookLhsQueryVariables = Exact<{
    userID: Scalars['String'];
    teamID: Scalars['String'];
}>;

export type PlaybookLhsQuery = { __typename?: 'Query', runs: Array<{ __typename?: 'Run', id: string, name: string, isFavorite: boolean }>, playbooks: Array<{ __typename?: 'Playbook', id: string, title: string, isFavorite: boolean, public: boolean }> };

export type AddPlaybookMemberMutationVariables = Exact<{
    playbookID: Scalars['String'];
    userID: Scalars['String'];
}>;

export type AddPlaybookMemberMutation = { __typename?: 'Mutation', addPlaybookMember: string };

export type RemovePlaybookMemberMutationVariables = Exact<{
    playbookID: Scalars['String'];
    userID: Scalars['String'];
}>;

export type RemovePlaybookMemberMutation = { __typename?: 'Mutation', removePlaybookMember: string };

export type UpdateRunMutationVariables = Exact<{
    id: Scalars['String'];
    updates: RunUpdates;
}>;

export type UpdateRunMutation = { __typename?: 'Mutation', updateRun: string };

export const PlaybookDocument = gql`
    query Playbook($id: String!) {
  playbook(id: $id) {
    id
    title
    description
    team_id: teamID
    public
    delete_at: deleteAt
    default_playbook_member_role: defaultPlaybookMemberRole
    invited_user_ids: invitedUserIDs
    broadcast_channel_ids: broadcastChannelIDs
    webhook_on_creation_urls: webhookOnCreationURLs
    reminder_timer_default_seconds: reminderTimerDefaultSeconds
    reminder_message_template: reminderMessageTemplate
    broadcast_enabled: broadcastEnabled
    webhook_on_status_update_enabled: webhookOnStatusUpdateEnabled
    webhook_on_status_update_urls: webhookOnStatusUpdateURLs
    status_update_enabled: statusUpdateEnabled
    retrospective_enabled: retrospectiveEnabled
    retrospective_reminder_interval_seconds: retrospectiveReminderIntervalSeconds
    retrospective_template: retrospectiveTemplate
    default_owner_id: defaultOwnerID
    run_summary_template: runSummaryTemplate
    run_summary_template_enabled: runSummaryTemplateEnabled
    message_on_join: messageOnJoin
    category_name: categoryName
    invite_users_enabled: inviteUsersEnabled
    default_owner_enabled: defaultOwnerEnabled
    webhook_on_creation_enabled: webhookOnCreationEnabled
    message_on_join_enabled: messageOnJoinEnabled
    categorize_channel_enabled: categorizeChannelEnabled
    create_public_playbook_run: createPublicPlaybookRun
    channel_name_template: channelNameTemplate
    is_favorite: isFavorite
    checklists {
      title
      items {
        title
        description
        state
        state_modified: stateModified
        assignee_id: assigneeID
        assignee_modified: assigneeModified
        command
        command_last_run: commandLastRun
        due_date: dueDate
      }
    }
    members {
      user_id: userID
      roles
      scheme_roles: schemeRoles
    }
    metrics {
      id
      title
      description
      type
      target
    }
  }
}
    `;

/**
 * __usePlaybookQuery__
 *
 * To run a query within a React component, call `usePlaybookQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaybookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaybookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaybookQuery(baseOptions: Apollo.QueryHookOptions<PlaybookQuery, PlaybookQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useQuery<PlaybookQuery, PlaybookQueryVariables>(PlaybookDocument, options);
}
export function usePlaybookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaybookQuery, PlaybookQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useLazyQuery<PlaybookQuery, PlaybookQueryVariables>(PlaybookDocument, options);
}
export type PlaybookQueryHookResult = ReturnType<typeof usePlaybookQuery>;
export type PlaybookLazyQueryHookResult = ReturnType<typeof usePlaybookLazyQuery>;
export type PlaybookQueryResult = Apollo.QueryResult<PlaybookQuery, PlaybookQueryVariables>;
export const UpdatePlaybookDocument = gql`
    mutation UpdatePlaybook($id: String!, $updates: PlaybookUpdates!) {
  updatePlaybook(id: $id, updates: $updates)
}
    `;
export type UpdatePlaybookMutationFn = Apollo.MutationFunction<UpdatePlaybookMutation, UpdatePlaybookMutationVariables>;

/**
 * __useUpdatePlaybookMutation__
 *
 * To run a mutation, you first call `useUpdatePlaybookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaybookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaybookMutation, { data, loading, error }] = useUpdatePlaybookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdatePlaybookMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaybookMutation, UpdatePlaybookMutationVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useMutation<UpdatePlaybookMutation, UpdatePlaybookMutationVariables>(UpdatePlaybookDocument, options);
}
export type UpdatePlaybookMutationHookResult = ReturnType<typeof useUpdatePlaybookMutation>;
export type UpdatePlaybookMutationResult = Apollo.MutationResult<UpdatePlaybookMutation>;
export type UpdatePlaybookMutationOptions = Apollo.BaseMutationOptions<UpdatePlaybookMutation, UpdatePlaybookMutationVariables>;
export const PlaybookLhsDocument = gql`
    query PlaybookLHS($userID: String!, $teamID: String!) {
  runs(
    participantOrFollowerID: $userID
    teamID: $teamID
    sort: "name"
    statuses: ["InProgress"]
  ) {
    id
    name
    isFavorite
  }
  playbooks(teamID: $teamID, withMembershipOnly: true) {
    id
    title
    isFavorite
    public
  }
}
    `;

/**
 * __usePlaybookLhsQuery__
 *
 * To run a query within a React component, call `usePlaybookLhsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaybookLhsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaybookLhsQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *      teamID: // value for 'teamID'
 *   },
 * });
 */
export function usePlaybookLhsQuery(baseOptions: Apollo.QueryHookOptions<PlaybookLhsQuery, PlaybookLhsQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useQuery<PlaybookLhsQuery, PlaybookLhsQueryVariables>(PlaybookLhsDocument, options);
}
export function usePlaybookLhsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaybookLhsQuery, PlaybookLhsQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useLazyQuery<PlaybookLhsQuery, PlaybookLhsQueryVariables>(PlaybookLhsDocument, options);
}
export type PlaybookLhsQueryHookResult = ReturnType<typeof usePlaybookLhsQuery>;
export type PlaybookLhsLazyQueryHookResult = ReturnType<typeof usePlaybookLhsLazyQuery>;
export type PlaybookLhsQueryResult = Apollo.QueryResult<PlaybookLhsQuery, PlaybookLhsQueryVariables>;
export const AddPlaybookMemberDocument = gql`
    mutation AddPlaybookMember($playbookID: String!, $userID: String!) {
  addPlaybookMember(playbookID: $playbookID, userID: $userID)
}
    `;
export type AddPlaybookMemberMutationFn = Apollo.MutationFunction<AddPlaybookMemberMutation, AddPlaybookMemberMutationVariables>;

/**
 * __useAddPlaybookMemberMutation__
 *
 * To run a mutation, you first call `useAddPlaybookMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlaybookMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlaybookMemberMutation, { data, loading, error }] = useAddPlaybookMemberMutation({
 *   variables: {
 *      playbookID: // value for 'playbookID'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useAddPlaybookMemberMutation(baseOptions?: Apollo.MutationHookOptions<AddPlaybookMemberMutation, AddPlaybookMemberMutationVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useMutation<AddPlaybookMemberMutation, AddPlaybookMemberMutationVariables>(AddPlaybookMemberDocument, options);
}
export type AddPlaybookMemberMutationHookResult = ReturnType<typeof useAddPlaybookMemberMutation>;
export type AddPlaybookMemberMutationResult = Apollo.MutationResult<AddPlaybookMemberMutation>;
export type AddPlaybookMemberMutationOptions = Apollo.BaseMutationOptions<AddPlaybookMemberMutation, AddPlaybookMemberMutationVariables>;
export const RemovePlaybookMemberDocument = gql`
    mutation RemovePlaybookMember($playbookID: String!, $userID: String!) {
  removePlaybookMember(playbookID: $playbookID, userID: $userID)
}
    `;
export type RemovePlaybookMemberMutationFn = Apollo.MutationFunction<RemovePlaybookMemberMutation, RemovePlaybookMemberMutationVariables>;

/**
 * __useRemovePlaybookMemberMutation__
 *
 * To run a mutation, you first call `useRemovePlaybookMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePlaybookMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePlaybookMemberMutation, { data, loading, error }] = useRemovePlaybookMemberMutation({
 *   variables: {
 *      playbookID: // value for 'playbookID'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useRemovePlaybookMemberMutation(baseOptions?: Apollo.MutationHookOptions<RemovePlaybookMemberMutation, RemovePlaybookMemberMutationVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useMutation<RemovePlaybookMemberMutation, RemovePlaybookMemberMutationVariables>(RemovePlaybookMemberDocument, options);
}
export type RemovePlaybookMemberMutationHookResult = ReturnType<typeof useRemovePlaybookMemberMutation>;
export type RemovePlaybookMemberMutationResult = Apollo.MutationResult<RemovePlaybookMemberMutation>;
export type RemovePlaybookMemberMutationOptions = Apollo.BaseMutationOptions<RemovePlaybookMemberMutation, RemovePlaybookMemberMutationVariables>;
export const UpdateRunDocument = gql`
    mutation UpdateRun($id: String!, $updates: RunUpdates!) {
  updateRun(id: $id, updates: $updates)
}
    `;
export type UpdateRunMutationFn = Apollo.MutationFunction<UpdateRunMutation, UpdateRunMutationVariables>;

/**
 * __useUpdateRunMutation__
 *
 * To run a mutation, you first call `useUpdateRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRunMutation, { data, loading, error }] = useUpdateRunMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateRunMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRunMutation, UpdateRunMutationVariables>) {
    const options = {...defaultOptions, ...baseOptions};
    return Apollo.useMutation<UpdateRunMutation, UpdateRunMutationVariables>(UpdateRunDocument, options);
}
export type UpdateRunMutationHookResult = ReturnType<typeof useUpdateRunMutation>;
export type UpdateRunMutationResult = Apollo.MutationResult<UpdateRunMutation>;
export type UpdateRunMutationOptions = Apollo.BaseMutationOptions<UpdateRunMutation, UpdateRunMutationVariables>;

export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[]
    }
}
const result: PossibleTypesResultData = {
    possibleTypes: {},
};
export default result;
