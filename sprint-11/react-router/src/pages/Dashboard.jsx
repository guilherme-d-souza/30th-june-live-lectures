import { Link, Outlet, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const params = useParams();
  const [username, setUsername] = useState(params.userId);

  useEffect(() => {
    // api.getUsername(params.userId).then((u) => setUsername(u));
  }, []);

  return (
    <div>
      <h1>
        This is the dashboard page from <span>{username}</span>
      </h1>
      <Button />
      <Link to="/dashboard/achievements">Achievements</Link>
      <Outlet></Outlet>
    </div>
  );
}
