import { useSetRecoilState } from "recoil"
import { nameState } from "../states"

export const Input = () => {
  const setName = useSetRecoilState(nameState)

  return (
    <div>
      <p>Enter name</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
