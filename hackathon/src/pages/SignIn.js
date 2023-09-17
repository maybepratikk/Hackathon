import { useCallback } from "react";
import Property1Default from "../components/Property1Default";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className={styles.signIn}>
      <div className={styles.topNav}>
        <div className={styles.logo} />
        <div className={styles.loginWrapper}>
          <div className={styles.login}>Login</div>
        </div>
        <Property1Default
          property1DefaultPosition="absolute"
          property1DefaultTop="calc(50% - 22.5px)"
          property1DefaultLeft="calc(50% - 395px)"
        />
      </div>
      <img className={styles.signInChild} alt="" src="/frame-2.svg" />
      <div className={styles.welcomeBackPleaseLoginToParent}>
        <b className={styles.welcomeBackPleaseContainer}>
          <p className={styles.welcomeBack}>Welcome back,</p>
          <p className={styles.welcomeBack}>
            <span>{`please `}</span>
            <span className={styles.login1}>Login</span>
            <span className={styles.toContinue}> to continue.</span>
          </p>
        </b>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.emailParent}>
              <div className={styles.login}>Email</div>
              <div className={styles.enterYourEmailWrapper}>
                <div className={styles.enterYourEmail}>Enter your email</div>
              </div>
            </div>
            <div className={styles.emailParent}>
              <div className={styles.login}>Password</div>
              <div className={styles.enterYourEmailWrapper}>
                <div className={styles.enterYourEmail}>Enter your email</div>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
              </div>
            </div>
          </div>
          <div
            className={styles.loginContainer}
            onClick={onFrameContainer6Click}
          >
            <div className={styles.login}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span className={styles.dontHaveAn}>Don’t have an account?</span>
        <span>{` `}</span>
        <span>
          <span className={styles.signUp}>Sign up.</span>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
