import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "./packageList.css";

const PropertyList = () => {
  const { data, loading} = useFetch(`${process.env.REACT_APP_LINK}/packages/countByType`);
  const navigate = useNavigate();
  const images = [
    "https://images.unsplash.com/photo-1599319277275-1fde9d907c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VsdHVyYWwlMjBpbmRpYXxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1573072738379-7c640e17ac4e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663011578612-802cc9904bd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545063914-a1a6ec821c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const HandleClick =  async(e) =>{

    const style = e.target.id
    const options ={
      adult: 1,
      children: 0,
    }
    navigate("/allpackages", { state: { style, options } });


  }
  return (
    <div className="pList">
      {loading ? (
        <>
                <Skeleton
                  count={10}
                  style={{width:"150px"}}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{width:"150px"}}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{width:"150px"}}
                />
                 <br></br>
                <Skeleton
                  count={10}
                  style={{width:"150px"}}
                />
                  <br></br>
                <Skeleton
                  count={10}
                  style={{width:"150px"}}
                />
              </>
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                  id={data[i]?.type}
                  onClick={HandleClick}
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
