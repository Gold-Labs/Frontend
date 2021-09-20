import styles from './footer.module.css';


export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_main}>
                    <h3>아직도 망설이고 계신가요?</h3>
                    <div>한땀한땀 손으로 만든 정성을 누군가에게 선물해보세요!! 당신의 정성에 어느 누구도 기뻐하지 않을 사람은 없답니다.</div>
                </div>
                <ul className={styles.content_button}>
                    <li><button>홈으로 가기</button></li>
                    <li><button>쇼핑하러 가기</button></li>
                </ul>
            </div>
            <div className={styles.contact}>
                <div className={styles.contact_main}>
                    <span>Contact us</span>
                    <span>서울시 성북구 돈암동</span>
                    <div>COPYRIGHT ClUBCROCHET ALL RIGHTS RESERVED</div>
                </div>
                <ul className={styles.sns_icons}>
                    <li className="sns_icon"><img src="/icon/mail.png"></img></li>
                    <li className="sns_icon"><img src="/icon/insta.png"></img></li>
                </ul>
            </div>
        </div>
    )
}