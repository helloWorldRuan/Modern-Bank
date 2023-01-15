import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} px-16`}>
    <div className={`${layout.sectionInfo} w-[50%]`}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" />
        in few easy steps.
      </h2>

      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        <Button styles="mt-10"/>
      </p>
    </div>

    <div className="w-[50%]">
      <img src={card} alt="card" className="w-[100%]"/>
    </div>
  </section>
);

export default CardDeal;
