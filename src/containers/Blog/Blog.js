import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    }
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: "#fa923f",
										textDecoration: "underline",
									}}
								>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname:
											"/new-post" /* pathname: this.props.match.url + '/new-post' */,
										hash: "#submit",
										search: "?quick-submit=true",
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} />*/}
				<Switch>
					{/*tells that consider only 1 route at a time*/}
					{this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> :  null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/*<Redirect from='/' to='/posts' />*/}
                    {/*<Route path='/' component={Posts} />*/}
				</Switch>
			</div>
		);
	}
}

export default Blog;
