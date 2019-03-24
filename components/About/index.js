import { AboutStyles } from './styles/About'
import Head from '../Head'

export default class About extends React.Component {
  render() {
    return (
      <AboutStyles>
        <Head title="About" />
        <div className="top">
          <img
            src="https://s3-us-west-1.amazonaws.com/shopping-site/avatars/anne-taylor-4"
            alt="portrait"
          />
        </div>
        <div className="bottom">
          <div className="about">About Us</div>
          <p>
            I started beading several years ago. I was a Store Manager in a fast paced retail
            environment with several Assistants and 70 - 90 Associates working under me. I was
            stressed and anxious and working hard to meet my goals and deadlines.
          </p>
          <p>
            I discovered a neighborhood bead store in which I found an escape from my work world on
            days off. It was a peaceful and creative place. I was a novice and needed a lot of
            advice and encouragement. I made simple things at first, mostly earrings, and donated
            the proceeds to {'  '}
            <a href="https://www2.jdrf.org" target="_blank" rel="noopener noreferrer">
              The Juvenille Diabetes Research Foundation
            </a>
            . Then I started making bracelets and necklaces which I gave away to friends and family.
          </p>
          <p>
            Now I am retired and have time on my hands to devote to a business venture. My sister
            Susan was a big fan of my jewelry. I recently lost her to a violent crime. Susan was a
            juvenile diabetic from age 2 and was an RN who worked as a diabetic educator for many
            years. If I am successful with Anne's Handmade I will donate 5% of my net profits to{' '}
            <a href="https://www2.jdrf.org" target="_blank" rel="noopener noreferrer">
              The Juvenille Diabetes Research Foundation
            </a>
            .
          </p>
          <p>
            Most of my beaded pieces are "one of a kind". I enjoy working with Swarovski Crystal
            beads and also with many of the Quartz gemstones like Aventurine, Carnelion, Amethyst,
            Pink Quartz, Jaspers and Onyx. Most of the charms and hardware I use are sterling
            silver. Most of the gemstones are thought to have healing or spiritual qualities.
          </p>
          <div className="signature">Anne Brooke</div>
        </div>
      </AboutStyles>
    )
  }
}
