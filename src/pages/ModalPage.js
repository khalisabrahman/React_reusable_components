import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>Accept</Button>
    </div>
  );

  const modal = (
    <Modal  onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        lobortis nisl. Quisque rutrum nulla libero, sed accumsan dui pharetra
        vel. Fusce iaculis porta lectus, vitae sollicitudin tortor tempus
        sollicitudin. Aenean vitae sem id lectus elementum porta nec nec justo.
        Proin mollis et purus in luctus. Donec sollicitudin malesuada interdum.
        Nam scelerisque turpis ut nunc euismod, a elementum eros sollicitudin.
        Nunc in sollicitudin mi, id ullamcorper mi. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
        hendrerit tincidunt nibh, sollicitudin pellentesque odio cursus ac. Sed
        fermentum a mauris eu laoreet. Suspendisse ultrices tortor quis lacinia
        molestie. Nam fermentum ipsum vel dapibus porta. In mi felis, sodales a
        ex eget, venenatis interdum est. Pellentesque nec libero aliquet erat
        euismod placerat. In placerat leo non tincidunt vehicula. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis et feugiat tortor. Donec nec posuere leo, at volutpat
        ipsum. Nullam varius, lorem quis tristique congue, magna augue varius
        arcu, ac lobortis ipsum arcu at arcu. Maecenas sed placerat ipsum. Etiam
        semper fringilla massa a ullamcorper. Maecenas lobortis ornare feugiat.
        Sed et orci porta, fringilla ante vitae, faucibus nunc. Cras varius
        posuere justo sed posuere. Nunc fringilla iaculis mattis. Aliquam mollis
        magna odio, at mollis nibh eleifend eget. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eget
        quam gravida, accumsan odio a, ultrices ante. Quisque nec volutpat elit.
        Nullam interdum finibus eros, vel pretium nulla blandit et. Nulla tempor
        tellus quis nunc eleifend volutpat. Proin facilisis facilisis arcu nec
        fermentum. Mauris tincidunt mi luctus condimentum interdum. Suspendisse
        scelerisque lorem nisi, eget iaculis magna posuere id. Vestibulum ornare
        justo vitae enim sollicitudin, ac finibus magna tincidunt. In ultrices
        vehicula purus at consectetur. Sed accumsan pretium ligula, sed bibendum
        est luctus eu. Duis sodales augue quis tincidunt facilisis. Proin nec
        sem nec neque aliquet fringilla at et odio. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        pretium finibus erat, ut imperdiet nibh dignissim id. Morbi dictum, enim
        ut hendrerit venenatis, neque magna vulputate leo, et sollicitudin nibh
        tortor id nibh. Curabitur porttitor lectus sit amet risus euismod, id
        convallis nisi pellentesque. Aenean eget arcu ultrices, suscipit nisi
        eu, mollis orci. Curabitur eu dignissim risus, eu mollis nisi. Vivamus
        fermentum diam felis, a pulvinar eros tempor et. Maecenas venenatis
        libero et augue porttitor sodales. Praesent in orci imperdiet ex
        elementum gravida id sed sem. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Phasellus malesuada finibus nulla, at luctus risus
        convallis eu. Integer ut elementum urna. Aliquam pharetra euismod magna
        sit amet tempus. Vestibulum sapien turpis, semper eget urna sit amet,
        ornare laoreet ex. Pellentesque eget mi ex. Mauris scelerisque, massa
        quis lacinia pellentesque, enim ligula vehicula tellus, et mollis eros
        sapien eu libero. Fusce ac urna auctor, feugiat nisl eget, interdum
        urna. Sed tincidunt augue est, ullamcorper interdum est malesuada vitae.
        Mauris pulvinar odio ligula, sit amet euismod arcu tincidunt sed. Etiam
        bibendum arcu placerat, pharetra sem eu, auctor elit. Nunc cursus tempor
        lorem, in vehicula orci venenatis vel. Mauris tristique, ligula sit amet
        mattis mollis, risus odio laoreet tellus, id consectetur enim tortor a
        arcu. Mauris dictum, quam a cursus ornare, urna dolor auctor nulla, ut
        ullamcorper risus tellus ut sem. Etiam dui dui, faucibus eu risus nec,
        pellentesque fermentum mi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In vulputate massa a est vestibulum, non laoreet lacus
        faucibus. Nullam pharetra posuere felis, ac dictum ex molestie nec.
        Fusce aliquet erat at suscipit posuere. Etiam sit amet felis feugiat,
        venenatis risus a, elementum magna. Donec interdum erat quis lacus
        convallis, quis eleifend augue efficitur. Phasellus aliquet magna quis
        ornare lacinia. Nunc accumsan vel erat eget gravida. Duis ac egestas
        elit. Vestibulum scelerisque velit tellus, id viverra risus vestibulum
        et. Aenean vitae congue turpis. Vestibulum maximus orci id nibh dictum
        fermentum. Donec tincidunt auctor dolor. Quisque vulputate tristique
        nisl, a gravida neque dignissim vel. Integer euismod dui sit amet ligula
        ultricies porta. Quisque vestibulum tincidunt sagittis. Mauris sed
        dapibus felis. Praesent dapibus suscipit quam vel commodo. Phasellus
        laoreet neque enim, a venenatis ex fermentum non. Vestibulum efficitur
        nisi vel pellentesque imperdiet. Quisque ex purus, cursus et tristique
        quis, pulvinar sit amet nibh. Ut euismod aliquam accumsan. Ut fringilla
        a enim eget tempor. Donec vel lectus orci. Sed sodales sollicitudin
        erat, non ultricies dui faucibus in. Morbi augue est, dapibus eu orci
        efficitur, lobortis dictum neque. Fusce laoreet, mauris sit amet egestas
        gravida, enim odio placerat felis, sit amet auctor enim justo id massa.
        Proin maximus mi non sapien sollicitudin euismod. Vivamus sollicitudin,
        magna non tincidunt consectetur, velit dolor luctus orci, et molestie ex
        orci in nisi. Morbi sagittis congue odio, eget facilisis nulla placerat
        nec. Aenean lorem sapien, fringilla vel venenatis sit amet, luctus
        rutrum ipsum. Maecenas id turpis efficitur, feugiat mi at, tincidunt
        nisl. Morbi ac felis eget tortor molestie feugiat. Etiam id cursus arcu.
        Donec id tortor sit amet risus facilisis porta nec eget sapien. Cras sed
        tempor risus. Quisque dignissim luctus lacus ut placerat. Suspendisse
        non lacus elementum, interdum est id, vehicula ipsum. Vivamus finibus
        libero a sagittis lacinia. Nullam tempus quis magna ac hendrerit.
        Vivamus commodo condimentum viverra. Aliquam erat volutpat. Cras non
        aliquet metus. Etiam lobortis fermentum egestas. Sed porta elementum
        lectus. Donec a urna id ligula molestie pharetra. Quisque mattis quis
        ante ac dapibus. Etiam eros nisi, consectetur vulputate condimentum eu,
        gravida nec orci. Phasellus nec tristique neque. Donec sit amet posuere
        velit. Aenean pharetra elit at ligula consectetur sagittis. Integer
        egestas pellentesque lectus sit amet vulputate. Aliquam blandit arcu a
        urna tempus, non viverra libero sollicitudin. Suspendisse auctor turpis
        sed ante convallis, vel euismod lacus tempor. Integer hendrerit nisl et
        dolor hendrerit molestie. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut ullamcorper dapibus diam eu tempor. Proin commodo
        tincidunt gravida. Aliquam posuere vestibulum ligula, id viverra purus
        porta ut. Aenean nunc libero, posuere id rutrum eget, porta faucibus
        nulla. Sed egestas dui vel ligula vestibulum dignissim. Nulla.
      </p>
    </div>
  );
}

export default ModalPage;
