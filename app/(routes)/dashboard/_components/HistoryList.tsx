"use client"

import Image from "next/image";
import React, { useState } from "react";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="mt-10">
      {historyList.length == 0 ? (
        <div className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl border-2">
          <Image src={"/medical-assistance.png"} alt="Medical Assistance" width={150} height={150}/>

          <h2 className="font-bold text-xl mt-2">No Recent Consulatation</h2>
          <p>It looks like you haven&apos;t consulted with any doctor yet.</p>
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}

export default HistoryList;
