import React from "react";
import Layout from "../../layout";
import {Link} from "react-router-dom"
import "./index.scss";
import paradox from "../../images/paradox.jpg"

const index = (props: any) => {
  return (
    <Layout name="Home">
      <main>
        <div className="banner">
          <div className="content">
            <h2 className="belle-title">Code of Conduct</h2>
              <p className="belle-content">
				  It's super important that everyone feels safe when engaging with the community or within our online events. We want our community to be as inclusive and welcoming as possible, and we believe that in order to achieve this goal, policies must be in place that prioritize safety and inclusion.<br/>
				  By participating in the community, you agree to abide by the conduct specified in this document. While recognizing that nobody is perfect and we all make mistakes, please understand that you may be removed from the community if that mistake is severe enough, or if you repeat the same mistake more than once.
              </p>
			  {/* <p>
			  </p> */}
			
            <span className="horizontal"></span>
          </div>
        </div>

        {/* Program Section */}

        <div className="program-wrapper">
          <div className="program-container">
            <div className="program-item">
              <h2>Report a violation</h2>
              <p>
                If you've witnessed someone violating the Code of Conduct, please let us know, either by reporting the post, messaging an admin or sending an email to info@decagonhq.com.
              </p>
            </div>
            <div className="program-item">
              <h2>Harassment</h2>
              <p>
                We do not tolerate harassment in this community. Examples of harassment include:
              </p>
			  <ul>
				  <li>Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neuro(a)typicality, physical appearance, body size, age, race, or religion.</li>
				  <li>Unwelcome comments regarding a person’s lifestyle choices and practices, including those related to food, health, parenting, drugs, and employment.</li>
				  <li>Deliberate misgendering or use of “dead” or rejected names.</li>
				  <li>Making light of/making mocking comments about trigger warnings and content warnings.</li>
				  <li>Gratuitous or off-topic sexual images or behaviour.</li>
				  <li>Physical contact and simulated physical contact (eg., textual descriptions like “hug” or “backrub”) without consent or after a request to stop.</li>
				  <li>Threats of violence.</li>
				  <li>Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in self-harm.</li>
				  <li>Deliberate intimidation.</li>
				  <li>Stalking or following.</li>
				  <li>Harassing photography or recording, including logging online activity for harassment purposes.</li>
				  <li>Sustained disruption of discussion.</li>
				  <li>Unwelcome sexual attention.</li>
				  <li>Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others.</li>
				  <li>Continued one-on-one communication after requests to cease, either in public or private.</li>
				  <li>Deliberate “outing” of any aspect of a person’s identity without their consent except as necessary to protect vulnerable people from intentional abuse.</li>
				  <li>Publication of non-harassing private communication.</li>
			  </ul>
              <p>
                In this community, we prioritize marginalized people's safety over privileged people's comfort. The following are not examples of harassment:
              </p>			  
			  <ul>
				  <li>Reverse-isms, including “reverse racism”, ”reverse sexism”, “cisphobia”.</li>
				  <li>Reasonable communication of boundaries, such as “leave me alone”, “go away”, or “I’m not discussing this with you”.</li>
				  <li>Criticising racist, sexist, cissexist, or otherwise oppressive behavior or assumptions.</li>				  
			  </ul>
            </div>
            <div className="program-item">
              <h2>General Guidelines</h2>
			  <h3 className="first">Always be Respectful</h3>
              <p>
                Be reverent of your mentor’s time and effort.. Mentors are usually very busy individuals, who are making out time to have a meeting with you. Endeavor to show up and give your full attention. Plus, you want to get the most out of your meetings in order to meet your goal.
              </p>
			  <h3>Gratitude is a powerful Catalyst for Happiness.</h3>
              <p>
                The mentors will help you for free so they are using their own time and resources and asking for nothing in return. Don’t take it for granted and show your appreciation by thanking them. Give them specific feedback about how they’ve helped you; it not only encourages them but also helps them become better mentors.
              </p>			  
			  <h3>Be Open To Learning.</h3>
              <p>
                Mentors have been in positions where they’ve made mistakes and learned from them, their expertise and experience is very vital to your growth, therefore, be open-minded and take their advice and tips as they’ve passed through this phase already.
              </p>			  
			  <h3>Respect Boundaries.</h3>
              <p>
                Both mentor and mentee are expected to set a schedule that is convenient for both parties, therefore be mindful to not be too demanding of your mentor’s time besides they are mentoring you for free. If you don’t hear from them, follow-up, but don’t hound him or her. Each mentorship will be unique in the frequency of communication.
              </p>			  
            </div>
            <div className="program-item">
              <h2>Internship </h2>
              <p>
                We offer a select number of organizations a free non-committal 2
                months internship with our developers prior to graduation.
              </p>
            </div>
            <div className="program-item">
              <h2 className="paradox">The Paradox of Tolerance</h2>
              <p>
                This community has a zero-tolerance policy towards transphobia, homophobia, biphobia, racism, sexism, ableism, ageism, classism, and any other forms of oppression. As mentioned above, it is considered a form of harassment, and one which will be acted upon swiftly.
              </p>
              <p>
                Some have said that having a zero-tolerance policy towards certain beliefs or philosophies is less inclusive, and that it's hypocritical to be talking about wanting a safe and inclusive space that excludes certain forms of expression.
              </p>
              <p>
                Paradoxically, in order to achieve a tolerant and inclusive space, it requires being intolerant to those who are openly intolerant. Otherwise, intolerant people will force out tolerant ones, and the space will become intolerant as a whole.
              </p>
              <p>
                This idea is expressed perfectly in this comic by philosopher Karl Popper:
              </p>
			  <img src={paradox} alt="Paradox of Tolerance by Karl Popper" />
            </div>
            <div className="program-item">
              <h2>Enforcement</h2>
              <p>
                If you are found to have violated this Code of Conduct, you may be given a warning, or removed from the community, at Decagon’s sole discretion. You won't be allowed into the community, or to any events (virtual or in-person).
              </p><br/>
              <p>
                Reports intended to silence legitimate criticism may be deleted without response.
              </p><br/>
              <p>
                We will respect confidentiality requests for the purpose of protecting victims of abuse. At our discretion, we may publicly name a person about whom we’ve received harassment complaints, or privately warn third parties about them, if we believe that doing so will increase the safety of our community members or the general public. We will not name harassment victims without their explicit consent.
              </p><br/>
              <p>
                We reserve the right to remove any offending messages, images, contributions, etc.
              </p>
            </div>
            <div className="program-item">
              <h2>Social Rules</h2>
              <p>
                The Recurse Center, a community-driven educational retreat, has a list of Social Rules. These rules encourage open discussion and help avoid unintentional put-downs.
              </p> <br/>
              <p>
                In addition to this policy, which is focused on harassment, We also hope that community members will abide by a few social rules as well. We've started with the Recurse Center's list, and made a couple alterations.
              </p> <br/>
              <p>
                The rules are:
              </p>
			  <ul>
				  <li>
					  No “Well-Actually”s: <br/>
					  A “well-actually” is an unhelpful correction that derails the conversation and makes the original speaker feel bad. An example might be if a speaker says "I really like using CSS mix blend modes!", and a responder says "They're actually just called Blend Modes". It may be technically correct, but it doesn't contribute anything to the discussion.
				</li>
				  <li>
					  No acting surprised: <br/>
					  Responses like "I can't believe you don't know about `position: absolute`!" only serve to make someone feel diminished, and it's not fair.
Everybody has gaps in their knowledge. Don't act surprised when one is revealed, even if it is genuinely surprising.
				 </li>
				  <li>
					  No microaggressions: <br/>
					  A microaggression is a subtle expression of racism, sexism, ageism, homophobia, transphobia, and other kinds of bias and prejudice. For example, "Windows is so easy to use that even my mom can use it". They're often unintentional, and go unnoticed by the aggressor.
Try not to make any assumptions about someone based on their identity or demography.
				</li>
				  <li>
					  Avoid the J-word: <br/>
					  The word "just" is often used to minimize the effort of something complicated. For example, "To make it responsive, just use a media query".
As we progress in our understanding about a topic, it begins to feel trivial to us, but it's important to remember that this stuff is complicated. By using "just", we imply that it should be trivial for everybody, and diminish the amount of effort and expertise required to understand.
				</li>
			  </ul>
			  <span>(We've omitted the Recurse Center's rule about “Backseat Driving” because it doesn't feel as relevant in an online community.)</span>
			  <p>We have personally violated each of these social rules, at one point or another. We don't expect everyone to be perfect. What we do expect is that you react gracefully when one is pointed out, and make a genuine effort to avoid making the same mistake in the future.</p>
            </div>          
		  </div>
        </div>

        <div className="cta">
          <div className="content">
            <h2 className="title">Ready to become a Decadev ?</h2>
            <Link to="/apply" className="btn big-btn">Apply now</Link>
            {/* <a
              href="https://decagonhq.com"
              className="btn big-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Closed
            </a> */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
