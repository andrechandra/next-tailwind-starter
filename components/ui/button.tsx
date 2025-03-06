import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Single variant configuration with conditional application
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Standard button styles
        default:
          'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'rounded-md hover:bg-accent hover:text-accent-foreground',

        // Link styles
        link: 'text-primary underline-offset-6 hover:underline',
        link_left:
          'text-primary relative w-fit before:absolute before:w-full before:bottom-0 before:left-0 before:border-b before:border-dotted before:border-black dark:before:border-white hover:before:opacity-0 before:transition-opacity before:duration-200 after:absolute after:w-full after:scale-x-0 after:h-[0.025rem] after:bottom-0 after:left-0 after:origin-left after:bg-black dark:after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-right',
        link_right:
          'text-primary relative w-fit before:absolute before:w-full before:bottom-0 before:left-0 before:border-b before:border-dotted before:border-black dark:before:border-white hover:before:opacity-0 before:transition-opacity before:duration-200 after:absolute after:w-full after:scale-x-0 after:h-[0.025rem] after:bottom-0 after:left-0 after:origin-right after:bg-black dark:after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left',
      },
      size: {
        default: 'h-10 px-4 py-2',
        small: 'h-8 rounded-md px-3',
        large: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      state: {
        default: 'cursor-pointer',
        disabled: 'opacity-80 cursor-not-allowed',
        loading: 'opacity-80 cursor-wait',
      },
      isLink: {
        true: 'h-7 px-0 py-0 gap-1',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      state: 'default',
      isLink: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isExternal?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconAnimation?: 'slide' | 'bounce' | 'fade' | 'scale' | 'none'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      state = 'default',
      isLink = false,
      isExternal = false,
      asChild = false,
      leftIcon,
      rightIcon,
      iconAnimation = 'none',
      children,
      ...props
    },
    ref
  ) => {
    // Generate icon animation classes
    const getIconAnimationClass = (position: 'left' | 'right') => {
      if (iconAnimation === 'none') return ''

      const baseClass = 'transition-transform duration-300 ease-in-out'

      switch (iconAnimation) {
        case 'slide':
          return position === 'left'
            ? `${baseClass} group-hover:-translate-x-1 group-focus:-translate-x-1`
            : `${baseClass} group-hover:translate-x-1 group-focus:translate-x-1`
        case 'bounce':
          return `${baseClass} group-hover:animate-bounce`
        case 'fade':
          return 'transition-opacity duration-300 opacity-70 group-hover:opacity-100'
        case 'scale':
          return `${baseClass} group-hover:scale-110 group-focus:scale-110`
        default:
          return ''
      }
    }

    // Combine all classes
    const buttonClasses = cn(
      buttonVariants({
        variant,
        size,
        state,
        isLink,
      }),
      isExternal ? 'cursor-[var(--external-cursor)]' : '',
      'group', // Add group class for icon animations
      className
    )

    // Create content with icons and children
    const content = (
      <>
        {leftIcon && (
          <span className={getIconAnimationClass('left')}>{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className={getIconAnimationClass('right')}>{rightIcon}</span>
        )}
      </>
    )

    // Return either Slot or button based on asChild prop
    if (asChild) {
      return (
        <Slot className={buttonClasses} ref={ref} {...props}>
          {/* Slot requires exactly ONE child element */}
          <span className="inline-flex items-center justify-center gap-2">
            {content}
          </span>
        </Slot>
      )
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {content}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
