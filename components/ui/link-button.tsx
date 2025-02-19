import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        unstyled_link: 'text-primary',
        underline_link_left:
          'text-primary border-b border-dotted border-black dark:border-white relative w-fit after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-left after:bg-black dark:after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-right',
        underline_link_right:
          'text-primary border-b border-dotted border-black dark:border-white relative w-fit after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-black dark:after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left',
      },
      size: {
        default: 'h-7',
        small: 'h-6',
        large: 'h-8',
        icon: 'h-7 w-7',
      },
    },
    defaultVariants: {
      variant: 'unstyled_link',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const LinkButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkButton.displayName = 'LinkButton'

export { LinkButton, buttonVariants }
