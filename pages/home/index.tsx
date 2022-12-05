import cn from 'classnames';
import styles from './index.module.scss';

import ELLink from '@/Components/ELLink';

import { IconBrandLinkedin } from '@/Assets/IconBrandLinkedin';
import { IconBrandGithub } from '@/Assets/IconBrandGithub';
import { IconMapPinSvg } from '@/Assets/IconMapPin';
import { IconMail } from '@/Assets/IconMail';
import ELHeadline from '@/Components/ELHeadline';
import { Base } from '@/Constants/base';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.headlineSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headTitle}>Eda Lökoğlu</h1>
            </div>
            <div className="col-12">
              <nav className={styles.skillList}>
                <div className={styles.item}>
                  <IconMapPinSvg className={styles.icon} />
                  <span className={styles.text}>Ankara, Turkey</span>
                </div>
                <ELLink
                  href={`mailto:${Base.Email}`}
                  className={styles.item}
                  target={'_blank'}>
                  <IconMail className={styles.icon} />
                  <span className={styles.text}>{Base.Email}</span>
                </ELLink>
                <ELLink
                  href={Base.LinkedIn}
                  className={styles.item}
                  target={'_blank'}>
                  <IconBrandLinkedin className={styles.icon} />
                  <span className={styles.text}>eda-lökoğlu</span>
                </ELLink>
                <ELLink
                  href={Base.Github}
                  className={styles.item}
                  target={'_blank'}>
                  <IconBrandGithub className={styles.icon} />
                  <span className={styles.text}>edalkgl</span>
                </ELLink>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.educationSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ELHeadline>Education</ELHeadline>
            </div>
            <div className="col-12">
              <div className={styles.list}>
                <div className={styles.item}>
                  <span className={cn(styles.text, styles.textLeft)}>
                    09/2017 – 07/2021 <br /> Konya, Turkey
                  </span>
                  <span className={styles.text}>
                    <b>Bachelor degree</b>, Necmettin Erbakan University <br />
                    Statistics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.skillSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ELHeadline>Skills</ELHeadline>
            </div>
            <div className="col-12">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.text}>Python</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>Machine Learning</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>Deep Learning</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>MySQL</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>SPSS</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>Excel</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.text}>Statistical Analysis</div>
                  <div className={styles.degree}>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={cn(styles.circle, styles.active)}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.certificatesSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ELHeadline>Certificates</ELHeadline>
            </div>
            <div className="col-12">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.title}>
                    Data Science for Public Good Program - Ankara
                  </div>
                  <div className={styles.desc}>Kodluyoruz</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>
                    Introduction to Machine Learning
                  </div>
                  <div className={styles.desc}>Global Al Hub</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>
                    Real Life Data Science Use Cases
                  </div>
                  <div className={styles.desc}>
                    Compec - Boğaziçi Üniversitesi Bilişim Kulübü
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>
                    Automatic Topic Classification of News Articles with Deep
                    Learning based Natural Language Processing
                  </div>
                  <div className={styles.desc}>
                    Compec - Boğaziçi Üniversitesi Bilişim Kulübü
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.languagesSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ELHeadline>Languages</ELHeadline>
            </div>
            <div className="col-12">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.title}>English</div>
                  <div className={styles.desc}>Beginner (B1,1)</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Turkish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.experienceSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-12">
                <ELHeadline>Professional Experience</ELHeadline>
              </div>
              <div className="col-12">
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.date}>
                      08/2021 – 11/2021 Ankara, Turkey
                    </div>
                    <div className={styles.text}>
                      <b>Data Science for Public Good,</b>
                      <span>CADS@TEDU and Kodluyoruz</span>
                      <br />
                      <br />
                      <p>
                        Thanks to this program, I have a better idea that data
                        science is very necessary for social benefit. As time
                        went on, I realized that data science was needed in
                        every field. To help people, we discussed the current
                        issue in Istanbul, the housing crisis. We created our
                        project with the concept of "livable housing", along
                        with teamwork. Using artificial learning algorithms, we
                        created a data science project. I realized that data
                        science is a very comprehensive area.
                      </p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>
                      07/2020 – 02/2021 Konya, Turkey
                    </div>
                    <div className={styles.text}>
                      <b>Data Science Intern,</b>
                      <span> TrueFeedBack</span>
                      <br />
                      <br />
                      <p>
                        I used machine learning algorithms through this
                        internship. I've learned about the preprocessing stages
                        of a dataset. I understand the importance of data
                        science better. Using data science to focus on problems
                        in the real world from a different perspective was a
                        great experience. I did a survey analysis on Python.
                        I've been looking for solutions to problems with machine
                        learning. I've seen more clearly that machine learning
                        makes things easier. I've decided to do some pioneering
                        work in data science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.profileSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ELHeadline>Profile</ELHeadline>
            </div>
            <div className="col-12">
              <article className={styles.text}>
                My goal for my whole life is to improve myself and learn new
                things. With every new information I've learned, I've discovered
                myself. Every piece of information I've learned in my life has
                led to me. I have the perspective of pushing the boundaries of
                my potential and being the best I can be. I've always been a
                solution-oriented person in the obstacles I've encountered. I
                learned from my problems, and never gave up. The most important
                thing for me in my work life is a good team, team spirit, and a
                good teammate. My goal in the business world is to ensure
                availability and efficiency in projects I will always contribute
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
