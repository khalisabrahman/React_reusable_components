import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoAlert } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log('click')
    }
  return (
    <div>
      <div>
        <Button onClick={handleClick} secondary outline rounded className="mb-5">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudDownload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoAlert />
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
