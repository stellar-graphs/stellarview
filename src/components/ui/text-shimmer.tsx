import type { CSSProperties, FC, ReactNode } from 'react'
import { ny } from '@/lib/utils'

interface TextShimmerProps {
   children: ReactNode
   className?: string
   shimmerWidth?: number
}

const TextShimmer: FC<TextShimmerProps> = ({
   children,
   className,
   shimmerWidth = 100,
}) => {
   return (
      <p
         style={
            {
               '--shimmer-width': `${shimmerWidth}px`,
            } as CSSProperties
         }
         className={ny(
            'mx-auto max-w-md text-neutral-800/70 dark:text-neutral-200/70',

            // Shimmer effect
            'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

            // Shimmer gradient
            'bg-gradient-to-r from-neutral-100 via-black/80 via-50% to-neutral-100 dark:from-neutral-900 dark:via-white/80 dark:to-neutral-900',

            className,
         )}
      >
         {children}
      </p>
   )
}

export default TextShimmer