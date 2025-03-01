import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <Button disabled className='w-full'>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  )
}
