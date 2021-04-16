import React from 'react'
import styled from 'styled-components'
import redesign1 from '../resources/Hydration_Redesign1.mp4'
import redesign2 from '../resources/Hydration_Redesign2.mp4'
import revinylize from '../resources/revinylize.mp4'

const HCDPage = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	padding: 0 2.5rem 2.5rem 2.5rem;
	font-size: 1.875rem;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 200;
`;

const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	color: #67ADFF;
	margin-bottom: 1rem;
`;

const Subtitle = styled.div`
	font-size: 1.5rem;
	text-align: center;
`;

const Link = styled.a`
	&:visited{
		text-decoration: none;
		color: blue;
	}
`;

const Project = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`;

const ProjectTitle = styled.div`
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

const ProjectSubtitle = styled.div`
	text-align: center;
	font-weight: 400;
	margin-bottom: 0.5rem;
`;

const ProjectBody = styled.div`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

const VideoEl = styled.video`
	width: 50%;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const SlideshowContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: 60%;
	padding-top: 35%;
`;

const ResponsiveFrame = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
`;

const Video = ({src}) => {
	return(
		<VideoContainer>
			<VideoEl controls>
				<source src={src}
						type="video/mp4"/>
				Your browser does not support this video.
			</VideoEl>
		</VideoContainer>
	);
}

const SlideShow = () => {
	return(
		<SlideshowContainer>
			<ResponsiveFrame src="https://docs.google.com/presentation/d/e/2PACX-1vTovTBbTHjaI5OSUy3tdyo-OJNwP5c_rQb8RlhJ4q814JRqruB6_63EOMqSWUM2tsVgRif9QxSBc2xe/embed?start=false&loop=false&delayms=3000" 
				title="Revinylize" frameborder="0" allowfullscreen="true" 
				mozallowfullscreen="true" webkitallowfullscreen="true"/>
		</SlideshowContainer>
	);
}

const HCD = () => {
	return(
		<HCDPage>
			<Title>
				Human Centered Design & Innovation
			</Title>
			<Subtitle>
				One of my favorite courses I have taken that taught me how to
				design products for humans and consumers.
				<br/>
				A more in-depth description of the course and its objectives can be found&nbsp;
				<Link href={"https://www.me.columbia.edu/harry-west-and-his-very-human-centered-approach-teaching-design"}>
					here.
				</Link>
			</Subtitle>
			<Project>
				<ProjectTitle>
					Designing a better hydration experience
				</ProjectTitle>
				<ProjectBody>
					The first project I worked on involved designing a new product or idea that would help a
					specific user stay hydrated. This could have been as simple as designing a better mug, or
					maybe even google calendar reminder that went off every hour to remind them to drink a cup
					of water. This was an assignment that introduced me to the idea of designing for a customer.
					I not only had to learn how to tailor a solution to meet a customer's needs, but I also learned
					how to figure out these needs and how to address specific problem areas that a consumer might face.
				</ProjectBody>
				<ProjectSubtitle>
					First Design Iteration
				</ProjectSubtitle>
				<Video src={redesign1}/>
				<ProjectBody>
					After completing the first design iteration, I brought the design back to the consumer for
					additional feedback. I realized that my initial "mug-kettle" design did not address all of
					her needs, specifically she wanted a solution that allowed her to share her hot beverages with
					her friends. Using this feedback, I built upon my previous design with another iteration.
				</ProjectBody>
				<ProjectSubtitle>
					Second Design Iteration
				</ProjectSubtitle>
				<Video src={redesign2}/>
			</Project>
			<Project>
				<ProjectTitle>
					Designing a better NYC transportation Experience
				</ProjectTitle>
				<ProjectBody>
					For our final project, we were tasked with devising a solution that would improve the
					transporation experience in New York City. Whether that be by creating a new transporation
					method, or by building upon existing experiences, the goal was to create a solution for a
					specific subset of New Yorkers.
				</ProjectBody>
				<ProjectBody>
					Our group decided to tackle improving the subway experience. We realized that more than
					1.8 million new yorkers commute through the subways with an average commute of 53 minutes.
					People spend hours every week on the subway, and their experience can often be miserable.
					My group thought that improving their experience would be a worthwhile idea and that's how
					we came up with the idea of ReVinylize.
				</ProjectBody>
				<ProjectSubtitle>
					How we came to our solution
				</ProjectSubtitle>
				<Container>
					<SlideShow/>
				</Container>
				<ProjectSubtitle>
					Pitching our idea
				</ProjectSubtitle>
				<Video src={revinylize}/>
			</Project>
		</HCDPage>
	);
}

export default HCD