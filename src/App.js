import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import MemberList from "./MemberList";

function App() {
    const [showSignup, setShowSignup] = useState(false);

    // 회원가입 화면 열기
    const openSignup = () => {
        setShowSignup(true);
    };

    // 회원가입 화면 닫기
    const closeSignup = () => {
        setShowSignup(false);
    };

    return (
        <div className="App">

            {/* 회원가입 버튼 */}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={openSignup}>
                    회원가입
                </button>
            </div>
            <MemberList/>

            {/* 모달로 회원가입 화면 열기 */}
            {showSignup && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">회원가입</h5>
                                <button className="btn-close" onClick={closeSignup}></button>
                            </div>
                            <div className="modal-body">
                                <Signup />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={closeSignup}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

