// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color  from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<FeaturedProjects />
		<GitRecentProjects user={user} repos={repos} />
		</>
	)
}

const reposNames = ['chat-app', 'promptopia', 'weather-app', 'blog-app', 'clock', 'echairs-backend', 'job-search-app', 'ecommerce_website'];

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes, gitReposRes] = await Promise.all( [
		fetch(`https://api.github.com/users/${settings.username.github}`),
		fetch(`https://api.github.com/users/${settings.username.github}/repos`),
	] )
	
	let [ user, repos] = await Promise.all( [
		gitUserRes.json(),
		gitReposRes.json(), 
	] )

	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
				const timestamp = Math.floor(new Date(pushed_at) / 1000)
				return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter( (e) => reposNames.includes(e.name))
	}

	if (!repos || !user) { return { notFound: true,	} }

	return { props: { repos, user } }
}