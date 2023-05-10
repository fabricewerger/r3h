import type { ReactElement, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'error' | 'info' | 'attention' | 'icon'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  className?: string
}

interface ITagFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

const tagFamilyClasses: ITagFamilyClasses = {
  size: {
    sm: 'text-xs px-xs py-0.5',
    md: 'text-base font-bold px-xs py-1',
  },
  variant: {
    error: {
      base: 'bg-red-500 text-white',
    },
    info: {
      base: 'bg-blue-500 text-white',
    },
    attention: {
      base: 'bg-orange-500 text-black border border-1 border-orange-500',
    },
    icon: {
      base: 'font-bold bg-grey-100 text-black border border-grey-200 ',
    },
  },
  iconPosition: {
    left: '[&>*:first-child]:order-first',
    right: '[&>*:first-child]:order-last',
  },
}

const Tag = ({ children, size = 'lg', variant = 'error', icon, iconPosition = 'left', className }: TagProps) => {
  return (
    <div className={className}>
      <div
        className={`relative inline-flex items-center justify-center rounded-[2px] transition-colors ${tagFamilyClasses['size'][size]} ${tagFamilyClasses['variant'][variant]['base']}`}
      >
        <span
          className={`inline-flex items-center justify-center gap-xs ${tagFamilyClasses['iconPosition'][iconPosition]}`}
        >
          {icon && <span>{icon}</span>}
          {children && <span>{children}</span>}
        </span>
      </div>
    </div>
  )
}

export default Tag
