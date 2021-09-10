import {githubReducer} from '../reducers/github.reducer';
import {addToFavorites, getRepositories, getRepositoriesSuccess, removeFromFavorites} from "../actions/github.action";

describe('Reducer', () => {
    const items = [
        {
            "id": 157616880,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTc2MTY4ODA=",
            "name": "iptv",
            "full_name": "iptv-org/iptv",
            "private": false,
            "owner": {
                "login": "iptv-org",
                "id": 55937028,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjU1OTM3MDI4",
                "avatar_url": "https://avatars.githubusercontent.com/u/55937028?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/iptv-org",
                "html_url": "https://github.com/iptv-org",
                "followers_url": "https://api.github.com/users/iptv-org/followers",
                "following_url": "https://api.github.com/users/iptv-org/following{/other_user}",
                "gists_url": "https://api.github.com/users/iptv-org/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/iptv-org/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/iptv-org/subscriptions",
                "organizations_url": "https://api.github.com/users/iptv-org/orgs",
                "repos_url": "https://api.github.com/users/iptv-org/repos",
                "events_url": "https://api.github.com/users/iptv-org/events{/privacy}",
                "received_events_url": "https://api.github.com/users/iptv-org/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/iptv-org/iptv",
            "description": "Collection of publicly available IPTV channels from all over the world",
            "fork": false,
            "url": "https://api.github.com/repos/iptv-org/iptv",
            "forks_url": "https://api.github.com/repos/iptv-org/iptv/forks",
            "keys_url": "https://api.github.com/repos/iptv-org/iptv/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/iptv-org/iptv/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/iptv-org/iptv/teams",
            "hooks_url": "https://api.github.com/repos/iptv-org/iptv/hooks",
            "issue_events_url": "https://api.github.com/repos/iptv-org/iptv/issues/events{/number}",
            "events_url": "https://api.github.com/repos/iptv-org/iptv/events",
            "assignees_url": "https://api.github.com/repos/iptv-org/iptv/assignees{/user}",
            "branches_url": "https://api.github.com/repos/iptv-org/iptv/branches{/branch}",
            "tags_url": "https://api.github.com/repos/iptv-org/iptv/tags",
            "blobs_url": "https://api.github.com/repos/iptv-org/iptv/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/iptv-org/iptv/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/iptv-org/iptv/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/iptv-org/iptv/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/iptv-org/iptv/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/iptv-org/iptv/languages",
            "stargazers_url": "https://api.github.com/repos/iptv-org/iptv/stargazers",
            "contributors_url": "https://api.github.com/repos/iptv-org/iptv/contributors",
            "subscribers_url": "https://api.github.com/repos/iptv-org/iptv/subscribers",
            "subscription_url": "https://api.github.com/repos/iptv-org/iptv/subscription",
            "commits_url": "https://api.github.com/repos/iptv-org/iptv/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/iptv-org/iptv/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/iptv-org/iptv/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/iptv-org/iptv/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/iptv-org/iptv/contents/{+path}",
            "compare_url": "https://api.github.com/repos/iptv-org/iptv/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/iptv-org/iptv/merges",
            "archive_url": "https://api.github.com/repos/iptv-org/iptv/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/iptv-org/iptv/downloads",
            "issues_url": "https://api.github.com/repos/iptv-org/iptv/issues{/number}",
            "pulls_url": "https://api.github.com/repos/iptv-org/iptv/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/iptv-org/iptv/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/iptv-org/iptv/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/iptv-org/iptv/labels{/name}",
            "releases_url": "https://api.github.com/repos/iptv-org/iptv/releases{/id}",
            "deployments_url": "https://api.github.com/repos/iptv-org/iptv/deployments",
            "created_at": "2018-11-14T22:00:57Z",
            "updated_at": "2021-09-10T09:47:03Z",
            "pushed_at": "2021-09-10T09:41:17Z",
            "git_url": "git://github.com/iptv-org/iptv.git",
            "ssh_url": "git@github.com:iptv-org/iptv.git",
            "clone_url": "https://github.com/iptv-org/iptv.git",
            "svn_url": "https://github.com/iptv-org/iptv",
            "homepage": "",
            "size": 160912,
            "stargazers_count": 39197,
            "watchers_count": 39197,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": false,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": true,
            "forks_count": 3219,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 71,
            "license": {
                "key": "unlicense",
                "name": "The Unlicense",
                "spdx_id": "Unlicense",
                "url": "https://api.github.com/licenses/unlicense",
                "node_id": "MDc6TGljZW5zZTE1"
            },
            "forks": 3219,
            "open_issues": 71,
            "watchers": 39197,
            "default_branch": "master",
            "score": 1.0
        }
    ]
    const initialState = githubReducer();
    const loadingState = githubReducer(initialState, getRepositories());
    const successState = githubReducer(loadingState, getRepositoriesSuccess(items));
    const addToFavoriteState = githubReducer(successState, addToFavorites(157616880));
    const removeFromFavoriteState = githubReducer(addToFavoriteState, removeFromFavorites(157616880));
    it('Returned State is the same for every action type',() => {
        expect(Object.keys(initialState)).toStrictEqual(['loading', 'repositories', 'error']);
        expect(Object.keys(loadingState)).toStrictEqual(['loading', 'repositories', 'error']);
        expect(Object.keys(successState)).toStrictEqual(['loading', 'repositories', 'error']);
        expect(Object.keys(addToFavoriteState)).toStrictEqual(['loading', 'repositories', 'error']);
        expect(Object.keys(removeFromFavoriteState)).toStrictEqual(['loading', 'repositories', 'error']);

    })
    it('Loading state', () => {
        expect(loadingState.loading === true).toBe(true);
        expect(loadingState.error === null).toBe(true);
    })
    it('Success state', () => {
        expect(successState.loading === false).toBe(true);
        expect(successState.error === null).toBe(true);
        expect(Array.isArray(successState.repositories)).toBe(true);
        expect(Object.keys(successState.repositories[0])).toStrictEqual([
            'key',              'id',
            'name',             'git_url',
            'html_url',         'owner',
            'description',      'created_at',
            'updated_at',       'pushed_at',
            'stargazers_count', 'language',
            'starred'
        ])
    })
    it('Add to favorite state', () => {
        const favoriteItem = addToFavoriteState.repositories.find(val => val.id === 157616880);
        expect(addToFavoriteState.loading === false).toBe(true);
        expect(addToFavoriteState.error === null).toBe(true);
        expect(Array.isArray(addToFavoriteState.repositories)).toBe(true);
        expect(favoriteItem.starred === true).toBe(true);
    })
    it('Remove from favorite state', () => {
        const removedItem = removeFromFavoriteState.repositories.find(val => val.id === 157616880);
        expect(addToFavoriteState.loading === false).toBe(true);
        expect(addToFavoriteState.error === null).toBe(true);
        expect(Array.isArray(addToFavoriteState.repositories)).toBe(true);
        expect(removedItem.starred === false).toBe(true);
    })
})