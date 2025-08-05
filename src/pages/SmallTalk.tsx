import { useEffect, useState } from "react";
import { db } from "../firebaseConfig.ts"; // Firebase 설정 별도 필요
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import "./SmallTalk.css";

export default function SmallTalk() {
    const [messages, setMessages] = useState<SmallTalkMessage[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [nameError, setNameError] = useState("");
    const [textError, setTextError] = useState("");
    const validate = () => {
        let valid = true;
        setNameError("");
        setTextError("");

        const trimmedName = name.trim();
        const trimmedText = text.trim();

        if (trimmedName.length < 2 || trimmedName.length > 6) {
            setNameError("이름은 2자 이상 6자 이하로 입력해주세요.");
            valid = false;
        }
        if (trimmedText.length < 1 || trimmedText.length > 30) {
            setTextError("메시지는 1자 이상 30자 이하로 입력해주세요.");
            valid = false;
        }

        return valid;
    };

    type SmallTalkMessage = {
        id: string;
        name: string;
        text: string;
        createdAt: Timestamp;
    };
    useEffect(() => {
        const q = query(collection(db, "smallTalk"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => {
                const data = doc.data() as Omit<SmallTalkMessage, "id">;
                return { id: doc.id, ...data };
            }));
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;
        if (!validate()) return;

        await addDoc(collection(db, "smallTalk"), {
            name,
            text,
            createdAt: Timestamp.now(),
        });

        setText("");
        setShowForm(false);
    };

    return (
        <div className="smallTalk-container">
            <ul className="smallTalk-list">
                {messages.map((msg, idx) => (
                    <li key={msg.id} className="smallTalk-item">
                        <div className="left-number">{messages.length - idx}</div>
                        <div className="smallTalk-content">
                            {/*<div className="smallTalk-name">*/}
                            {/*    {msg.text.includes("🔒") ? "🔒 " : ""}*/}
                            {/*    {msg.name.length > 2 ? msg.name[0] + "＊".repeat(msg.name.length - 1) : msg.name}*/}
                            {/*</div>*/}
                            <div className="smallTalk-text">{msg.text}</div>
                            <div className="smallTalk-meta">
                                {msg.name}
                                <span> · {formatRelative(msg.createdAt?.toDate())}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {!showForm ? (
                <button className="write-button" onClick={() => setShowForm(true)}>
                    글쓰기
                </button>
            ) : (
                <form className="write-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="이름"
                        value={name}
                        maxLength={6} // 입력 제한
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className="error-text">{nameError}</div>}

                    <textarea
                        placeholder="메시지를 입력하세요"
                        value={text}
                        maxLength={30} // 입력 제한
                        onChange={(e) => setText(e.target.value)}
                    />
                    {textError && <div className="error-text">{textError}</div>}

                    <div className="button-row">
                        <button type="submit">등록</button>
                        <button type="button" onClick={() => {
                            setName("");
                            setText("");
                            setShowForm(false);
                            setNameError("");
                            setTextError("");
                        }}>
                            취소
                        </button>
                    </div>

                </form>
            )}
            <div className="bottom-banner">
                ⚠️ 욕설, 비방, 도배는 형법 제311조(모욕죄), 정보통신망법 제70조에 따라 처벌될 수 있습니다.
            </div>
        </div>
    );
}

function formatRelative(date: Date) {
    const diff = Date.now() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? `${days}일 전` : "오늘";
}

