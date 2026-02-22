import { Text } from "@wesan-labs/levios-ui"

import Levios from "../../../common/icons/levios"
import NextJs from "../../../common/icons/nextjs"

const LeviosCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.leviosjs.com" target="_blank" rel="noreferrer">
        <Levios fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </Text>
  )
}

export default LeviosCTA
