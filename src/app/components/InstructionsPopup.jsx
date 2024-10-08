import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaCoins } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { GoGoal } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";

const InstructionsPopup = ({ modalInstruction, title }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("body"); // We need this for acessibility compliance by preventing the rest of the app from being accessible to screen readers while the modal is open
    }
  }, []);

  let iconTitle = "" 

  if(title === "Coins")
    iconTitle =     <>
    <FaCoins 
      size={25}
    />
    <p>{title}</p>
  </> 
  else if(title === "Energy")
    iconTitle =     <>
    <SlEnergy 
      size={25}
    />
    <p>{title}</p>
  </> 
  else if(title === "Coding Goal")
    iconTitle =     <>
    <GoGoal 
      size={25}
    />
    <p>{title}</p>
  </> 
  else if(title === "Difficulty")
    iconTitle =     <>
    <MdOutlineTimer       
      size={25}
    />
    <p>{title}</p>
  </> 

  return (
    <div>
      <button className="btn text-lg btn-primary btn-outline w-44 justify-start" onClick={()=>document.getElementById(`my_modal_${title}`).showModal()}>{iconTitle}
          </button>
        <dialog id={`my_modal_${title}`} className="modal">
          <div className="modal-box">
            <h3 className="text-2xl">{title}</h3>
            <p className="py-4">{modalInstruction}</p>
            
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  );
};

export default InstructionsPopup;
