import styles from './footer.module.scss';
import {Link} from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content_main}>
                        <h3>아직도 망설이고 계신가요?</h3>
                        <div>한땀한땀 손으로 만든 정성을 누군가에게 선물해보세요!!</div>
                        <div>당신의 정성에 모두가 기뻐하고 있습니다.</div>
                    </div>
                    <ul className={styles.content_button}>
                        <li>
                            <button><Link to="/home">홈으로 가기</Link></button>
                        </li>
                        <li>
                            <button>쇼핑하러 가기</button>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contact_main}>
                        <div>Contact us 서울시 성북구 돈암동</div>
                        <div>COPYRIGHT ClUBCROCHET ALL RIGHTS RESERVED</div>
                    </div>
                    <ul className={styles.sns_icons}>
                        <li className={styles.sns_icon}><img src="assets/icon/mail.png"></img></li>
                        <li className={styles.sns_icon}><img src="assets/icon/insta.png"></img></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}