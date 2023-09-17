import HowToUseWebsiteContainer from "./HowToUseWebsiteContainer";
import StoreEvaluateCollaborateContai2 from "./StoreEvaluateCollaborateContai2";
import ContainerFeaturesForm from "./ContainerFeaturesForm";
import StoreEvaluateCollaborateContai1 from "./StoreEvaluateCollaborateContai1";
import FeaturesContainer from "./FeaturesContainer";
import styles from "./StudentGuideContainer1.module.css";

const StudentGuideContainer1 = () => {
  return (
    <div className={styles.guideForStudents}>
      <HowToUseWebsiteContainer
        purpose="For Internal Mentors"
        websiteDescription="Internal Faculty can register themselves through their Respective University."
        studentCollaborationDescr="Registered Faculty will receive their Credentials from their Univerisity."
        propLeft="calc(50% - 340px)"
        propBorder="1px solid var(--grey-shades-grey-shades-2)"
        propColor="#c3c3c3"
        propColor1="#212121"
        propColor2="#aeaeae"
      />
      <div className={styles.registerParent}>
        <div className={styles.register}>
          <div className={styles.homepage}>
            <img className={styles.blobIcon} alt="" src="/blob1.svg" />
            <div className={styles.topNav}>
              <div className={styles.logo} />
              <div className={styles.loginWrapper}>
                <div className={styles.login}>Login</div>
              </div>
              <div className={styles.menus}>
                <div className={styles.menu1}>
                  <div className={styles.login}>Home</div>
                </div>
                <div className={styles.menu4}>
                  <div className={styles.login}>Students</div>
                </div>
                <div className={styles.menu4}>
                  <div className={styles.login}>Faculty</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>External Mentor</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>Problem Statements</div>
                </div>
              </div>
            </div>
            <StoreEvaluateCollaborateContai2 />
            <div className={styles.aboutUs}>
              <div className={styles.text}>
                <div className={styles.howToUse}>About us</div>
                <div className={styles.weAreXyzContainer}>
                  <p className={styles.weAreXyz}>
                    We are XYZ. Making the Process of PG Dissertation shorter,
                    we have built this website
                  </p>
                  <p className={styles.weAreXyz}>
                    to help improve the current evaluation technique. We solved
                    the problem of Palgiarism,
                  </p>
                  <p className={styles.weAreXyz}>
                    Duplicacy, Security and Student-Guide Ratio.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutUs2}>
              <div className={styles.frameParent}>
                <div className={styles.forStudentsWrapper}>
                  <div className={styles.login}>For Students</div>
                </div>
                <div className={styles.text1}>
                  <div className={styles.howToUse}>
                    How to use this website?
                  </div>
                  <div className={styles.weAreXyzContainer}>
                    <p className={styles.weAreXyz}>
                      Students can use this website to collaborate or schedule
                      meeting with their
                    </p>
                    <p className={styles.weAreXyz}>
                      mentors. They can also store the resources they use for
                      their research paper.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.aboutUsChild} />
              <div className={styles.aboutUsItem} />
              <div className={styles.aboutUsInner} />
            </div>
            <ContainerFeaturesForm
              dimensionCode="/teacher-studentrafiki-12.svg"
              dimensionCodeText="/phishing-accountrafiki-12.svg"
              dimensionText="/live-collaborationrafiki-12.svg"
              dimensionValue="/progress-overviewrafiki-12.svg"
              dimensionCodeImage="/dropdown-menurafiki-12.svg"
              dimensionCodeTimestamp="/date-pickerrafiki-12.svg"
            />
            <img className={styles.cursorIcon} alt="" src="/cursor.svg" />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>First of all, Register yourself as</p>
          <p className={styles.weAreXyz}>{`Mentor and you’ll recieve a `}</p>
          <p className={styles.weAreXyz}>Unique key</p>
        </div>
      </div>
      <div className={styles.registerGroup}>
        <div className={styles.register}>
          <div className={styles.homepage1}>
            <img className={styles.blobIcon1} alt="" src="/blob2.svg" />
            <div className={styles.topNav1}>
              <div className={styles.logo1} />
              <div className={styles.loginContainer}>
                <div className={styles.login}>Login</div>
              </div>
              <div className={styles.menus1}>
                <div className={styles.menu11}>
                  <div className={styles.login}>Home</div>
                </div>
                <div className={styles.menu41}>
                  <div className={styles.login}>Students</div>
                </div>
                <div className={styles.menu21}>
                  <div className={styles.login}>Faculty</div>
                </div>
                <div className={styles.menu41}>
                  <div className={styles.login}>External Mentor</div>
                </div>
                <div className={styles.menu33}>
                  <div className={styles.login}>Problem Statements</div>
                </div>
              </div>
            </div>
            <StoreEvaluateCollaborateContai1 />
            <div className={styles.aboutUs3}>
              <div className={styles.text2}>
                <div className={styles.howToUse}>About us</div>
                <div className={styles.weAreXyzContainer1}>
                  <p className={styles.weAreXyz}>
                    We are XYZ. Making the Process of PG Dissertation shorter,
                    we have built this website
                  </p>
                  <p className={styles.weAreXyz}>
                    to help improve the current evaluation technique. We solved
                    the problem of Palgiarism,
                  </p>
                  <p className={styles.weAreXyz}>
                    Duplicacy, Security and Student-Guide Ratio.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutUs5}>
              <div className={styles.frameGroup}>
                <div className={styles.forStudentsContainer}>
                  <div className={styles.login}>For Students</div>
                </div>
                <div className={styles.text3}>
                  <div className={styles.howToUse}>
                    How to use this website?
                  </div>
                  <div className={styles.weAreXyzContainer1}>
                    <p className={styles.weAreXyz}>
                      Students can use this website to collaborate or schedule
                      meeting with their
                    </p>
                    <p className={styles.weAreXyz}>
                      mentors. They can also store the resources they use for
                      their research paper.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} />
              <div className={styles.aboutUsChild1} />
              <div className={styles.aboutUsChild2} />
            </div>
            <FeaturesContainer
              dimensionCode="/teacher-studentrafiki-13.svg"
              imageDimensionCode="/phishing-accountrafiki-13.svg"
              dimensionCodeImageUrl="/live-collaborationrafiki-13.svg"
            />
            <img className={styles.cursorIcon1} alt="" src="/cursor.svg" />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>Then, go to the Faculty Section.</p>
          <p className={styles.weAreXyz}>Login with your credentials.</p>
        </div>
      </div>
      <div className={styles.registerContainer}>
        <div className={styles.register}>
          <div className={styles.homepage}>
            <img className={styles.blobIcon} alt="" src="/blob1.svg" />
            <div className={styles.topNav}>
              <div className={styles.logo} />
              <div className={styles.loginWrapper}>
                <div className={styles.login}>Login</div>
              </div>
              <div className={styles.menus}>
                <div className={styles.menu1}>
                  <div className={styles.login}>Home</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>Students</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>Faculty</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>External Mentor</div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.login}>Problem Statements</div>
                </div>
              </div>
            </div>
            <StoreEvaluateCollaborateContai2 />
            <div className={styles.aboutUs}>
              <div className={styles.text}>
                <div className={styles.howToUse}>About us</div>
                <div className={styles.weAreXyzContainer}>
                  <p className={styles.weAreXyz}>
                    We are XYZ. Making the Process of PG Dissertation shorter,
                    we have built this website
                  </p>
                  <p className={styles.weAreXyz}>
                    to help improve the current evaluation technique. We solved
                    the problem of Palgiarism,
                  </p>
                  <p className={styles.weAreXyz}>
                    Duplicacy, Security and Student-Guide Ratio.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutUs2}>
              <div className={styles.frameParent}>
                <div className={styles.forStudentsWrapper}>
                  <div className={styles.login}>For Students</div>
                </div>
                <div className={styles.text1}>
                  <div className={styles.howToUse}>
                    How to use this website?
                  </div>
                  <div className={styles.weAreXyzContainer}>
                    <p className={styles.weAreXyz}>
                      Students can use this website to collaborate or schedule
                      meeting with their
                    </p>
                    <p className={styles.weAreXyz}>
                      mentors. They can also store the resources they use for
                      their research paper.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.aboutUsChild} />
              <div className={styles.aboutUsItem} />
              <div className={styles.aboutUsInner} />
            </div>
            <ContainerFeaturesForm
              dimensionCode="/teacher-studentrafiki-12.svg"
              dimensionCodeText="/phishing-accountrafiki-12.svg"
              dimensionText="/live-collaborationrafiki-12.svg"
              dimensionValue="/progress-overviewrafiki-12.svg"
              dimensionCodeImage="/dropdown-menurafiki-12.svg"
              dimensionCodeTimestamp="/date-pickerrafiki-12.svg"
            />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>Once logged in. Start exploring.</p>
          <p className={styles.weAreXyz}>For further Guidance, check</p>
          <p className={styles.weAreXyz}>out Faculty Guide Book</p>
        </div>
      </div>
    </div>
  );
};

export default StudentGuideContainer1;
