import { Container } from "./style";
import Logo from "../../assets/To-Do List.svg"

import Social1 from "../../assets/Vector(3).svg"
import Social2 from "../../assets/Vector(4).svg"
import Social3 from "../../assets/Vector(5).svg"
import Social4 from "../../assets/Vector(6).svg"
import Social5 from "../../assets/Vector(7).svg"



import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

const docRef = doc(db, "task");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}





export default function Main() {
    return(
        <Container>
            <div className="line1">
                <div className="lok">
                    <span> <a href=""> <img src={Social1} alt="" /></a> Criar nova tarefa </span>
                    <div className="columm bf">
                        <input type="text" placeholder="Nome da tarefa" />
                        <button >
                            
                            <img src={Social4} alt="" />
                        </button>
                    </div>
                </div>

                <div className="linha">

                </div>
                <div className="lok1">
                    <span> <a href=""> <img src={Social2} alt="" /></a> Tarefas de hoje </span>
                    <div className="columm">
                       <ul>
                            <li>Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li>Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li>Estudar React <button><img src={Social3} alt="" /></button> </li>

                       </ul>
                    </div>
                </div>

            </div>
            <div className="lip">

            </div>
            <div className="lok1">
                    <span> <a href=""> <img src={Social5} alt="" /></a> Tarefas Concluidas </span>
                    <div className="columm">
                       <ul>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>

                       </ul>
                    </div>
            </div>
            
        </Container>
    )
}