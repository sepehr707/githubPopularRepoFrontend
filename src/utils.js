export const mapGithubRepoData = (val, index) => {
    return {
        key: index,
        id: val.id,
        name: val.name,
        git_url: val.git_url,
        html_url: val.html_url,
        owner : {
            id: val.owner.id,
            login: val.owner.login,
            avatar_url: val.owner.avatar_url,
        },
        description: val.description?.length > 70 ? val.description.slice(0,40) + '...' : val.description,
        created_at: val.created_at,
        updated_at: val.updated_at,
        pushed_at: val.pushed_at,
        stargazers_count: val.stargazers_count,
        language: val.language,
        starred: false
    }
}