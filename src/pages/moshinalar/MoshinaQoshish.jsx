import React from "react";

const MoshinaQoshish = () => {
  return (
    <div className="moshinaqoshish">
      <form>
        <input type="file" accept="image/*" name="file" id="file" class="inputfile" />
        <label for="file">Ustiga bosing va Moshinaning rasmi</label>
        <input type="text" placeholder="Avtomobil rusumi" />
        <input type="text" placeholder="Avtomobil raqami" maxLength={10} />
        <input type="text" placeholder="Prisep rusumi" />
        <input type="text" placeholder="Prisep raqami" maxLength={10} />
        <input type="text" placeholder="Bosh haydovchi" />
      </form>
    </div>
  );
};

export default MoshinaQoshish;
