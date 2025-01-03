import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link_right:
          'text-primary no-underline relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200',
        link_left:
          'text-primary decoration-dotted relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200',
        primary: 'bg-blue-500 text-white hover:bg-blue-600 transition-colors',
        outline_primary:
          'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors',
        ghost_primary: 'text-blue-500 hover:bg-blue-50 transition-colors',
        dark: 'bg-gray-900 text-white hover:bg-gray-800 transition-colors',
        light: 'bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors',
        underline:
          'text-primary decoration-dotted relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200',
        arrow: 'group flex items-center gap-2 hover:gap-3 transition-all',
        direction_left:
          'flex items-center gap-2 hover:gap-3 transition-all [&>svg]:rotate-180',
        direction_right: 'flex items-center gap-2 hover:gap-3 transition-all',
        polymorphic:
          'relative overflow-hidden bg-blue-500 text-white hover:bg-blue-600 transition-colors after:absolute after:inset-0 after:bg-white after:opacity-0 hover:after:opacity-10 after:transition-opacity',
        polymorphic_outline:
          'relative overflow-hidden border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors after:absolute after:inset-0 after:bg-blue-500 after:opacity-0 hover:after:opacity-5 after:transition-opacity',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        rounded_icon: 'h-9 w-9 rounded-full',
      },
      loading: {
        true: 'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait [&>span]:invisible',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      loading: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
Button.displayName = 'Button'

export { Button, buttonVariants }
