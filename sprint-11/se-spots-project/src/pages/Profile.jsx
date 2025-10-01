import useUser from "../hooks/useUser";

export default function Profile() {
  const user = useUser();

  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <h1>{user.name}</h1>
      <p>
        This person is very cool. I like this person. This person was born in
        19XX, it's working with XXXX..
      </p>
    </div>
  );
}
