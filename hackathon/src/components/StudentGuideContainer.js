import HowToUseWebsiteContainer from "./HowToUseWebsiteContainer";
import StoreEvaluateCollaborateContai2 from "./StoreEvaluateCollaborateContai2";
import ContainerFeaturesForm from "./ContainerFeaturesForm";
import StoreEvaluateCollaborateContai1 from "./StoreEvaluateCollaborateContai1";
import FeaturesContainer from "./FeaturesContainer";
import styles from "./StudentGuideContainer.module.css";

const StudentGuideContainer = () => {
  return (
    <div className={styles.guideForStudents}>
      <HowToUseWebsiteContainer
        purpose="For Students"
        websiteDescription="Students can use this website to collaborate or schedule meeting with their"
        studentCollaborationDescr="mentors. They can also store the resources they use for their research paper."
      />
      <div className={styles.forStudentsImage3}>
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
              dimensionCode="/teacher-studentrafiki-1.svg"
              dimensionCodeText="/phishing-accountrafiki-1.svg"
              dimensionText="/live-collaborationrafiki-1.svg"
              dimensionValue="/progress-overviewrafiki-1.svg"
              dimensionCodeImage="/dropdown-menurafiki-1.svg"
              dimensionCodeTimestamp="/date-pickerrafiki-1.svg"
            />
            <img className={styles.cursorIcon} alt="" src="/cursor.svg" />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>First of all, Register yourself</p>
          <p className={styles.weAreXyz}>and you’ll recieve a Unique</p>
          <p className={styles.weAreXyz}>key</p>
        </div>
      </div>
      <div className={styles.forStudentsImage2}>
        <div className={styles.register}>
          <div className={styles.homepage1}>
            <img className={styles.blobIcon} alt="" src="/blob2.svg" />
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
                <div className={styles.menu11}>
                  <div className={styles.login}>Faculty</div>
                </div>
                <div className={styles.menu41}>
                  <div className={styles.login}>External Mentor</div>
                </div>
                <div className={styles.menu41}>
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
              dimensionCode="/teacher-studentrafiki-11.svg"
              imageDimensionCode="/phishing-accountrafiki-11.svg"
              dimensionCodeImageUrl="/live-collaborationrafiki-11.svg"
            />
            <img className={styles.cursorIcon1} alt="" src="/cursor.svg" />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>Then go to Students section</p>
          <p className={styles.weAreXyz}>{`and Login with your Unique `}</p>
          <p className={styles.weAreXyz}>code.</p>
        </div>
      </div>
      <div className={styles.forStudentsImage}>
        <div className={styles.register}>
          <div className={styles.homepage}>
            <img className={styles.blobIcon} alt="" src="/blob1.svg" />
            <div className={styles.topNav2}>
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
            <div className={styles.aboutUs6}>
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
              dimensionCode="/teacher-studentrafiki-1.svg"
              dimensionCodeText="/phishing-accountrafiki-1.svg"
              dimensionText="/live-collaborationrafiki-1.svg"
              dimensionValue="/progress-overviewrafiki-1.svg"
              dimensionCodeImage="/dropdown-menurafiki-1.svg"
              dimensionCodeTimestamp="/date-pickerrafiki-1.svg"
            />
          </div>
        </div>
        <div className={styles.firstOfAllContainer}>
          <p className={styles.weAreXyz}>Once you’re in, Start exploring.</p>
          <p className={styles.weAreXyz}>For further Guidance, see our</p>
          <p className={styles.weAreXyz}>Guide Page.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentGuideContainer;
