'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Shield,
  Plus,
  Monitor,
  Phone,
  CreditCard,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  PlusIcon,
  MinusIcon,
  Loader2,
} from 'lucide-react'
import Link from 'next/link'

export function ComponentGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Unstyled Link */}
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Unstyled Link</CardTitle>
            <CardDescription>Link buttons with no style.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Button isLink variant="link" asChild>
              <Link href="/" className="flex items-center group">
                Internal Links
              </Link>
            </Button>
            <Separator orientation="vertical" />
            <Button isLink isExternal variant="link" asChild>
              <Link
                href="https://andrechandra.vercel.app"
                className="flex items-center group"
              >
                External Links
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Underline Link */}
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Underline Link</CardTitle>
            <CardDescription>
              Link buttons with an underlined text style.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Button isLink variant="link_right" asChild>
              <Link href="/" className="flex items-center group">
                Internal Links
              </Link>
            </Button>
            <Button isLink variant="link_left" asChild>
              <Link href="/" className="flex items-center group">
                Internal Links
              </Link>
            </Button>
            <Separator orientation="vertical" />
            <Button isLink isExternal variant="link_right" asChild>
              <Link
                href="https://andrechandra.vercel.app"
                className="flex items-center group"
              >
                External Links
              </Link>
            </Button>
            <Button isLink isExternal variant="link_left" asChild>
              <Link
                href="https://andrechandra.vercel.app"
                className="flex items-center group"
              >
                External Links
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Arrow Underline Link */}
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Underline Arrow Link</CardTitle>
            <CardDescription>
              Underlined link buttons with animated arrow icons.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Button
              isLink
              variant="link_right"
              rightIcon={<ChevronRight />}
              iconAnimation="slide"
              asChild
            >
              <Link href="/" className="flex items-center group">
                Internal Links
              </Link>
            </Button>
            <Button
              isLink
              variant="link_left"
              leftIcon={<ChevronLeft />}
              iconAnimation="slide"
              asChild
            >
              <Link href="/" className="flex items-center group">
                Internal Links
              </Link>
            </Button>
            <Separator orientation="vertical" />
            <Button
              isLink
              isExternal
              variant="link_right"
              rightIcon={<ChevronRight />}
              iconAnimation="slide"
              asChild
            >
              <Link
                href="https://andrechandra.vercel.app"
                className="flex items-center group"
              >
                External Links
              </Link>
            </Button>
            <Button
              isLink
              isExternal
              variant="link_left"
              leftIcon={<ChevronLeft />}
              iconAnimation="slide"
              asChild
            >
              <Link
                href="https://andrechandra.vercel.app"
                className="flex items-center group"
              >
                External Links
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Button Link */}
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Button Link</CardTitle>
            <CardDescription>
              Various button styles with different appearances.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-col">
            {/* Default Size Button */}
            <div className="flex gap-4">
              <Button>Primary Variant</Button>
              <Button variant="secondary">Secondary Variant</Button>
              <Button variant="outline">Outline Variant</Button>
              <Button variant="ghost">Ghost Variant</Button>
              <Button variant="destructive">Destructive Variant</Button>
            </div>
            <div className="flex gap-4">
              <Button leftIcon={<PlusIcon />} rightIcon={<MinusIcon />}>
                Icon
              </Button>
              <Button
                variant="secondary"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                variant="outline"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                variant="ghost"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                variant="destructive"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
            </div>
            <Separator />
            {/* Small Size Button */}
            <div className="flex gap-4">
              <Button size="small">Small Size</Button>
              <Button size="small" variant="secondary">
                Small Size
              </Button>
              <Button size="small" variant="outline">
                Small Size
              </Button>
              <Button size="small" variant="ghost">
                Small Size
              </Button>
              <Button size="small" variant="destructive">
                Small Size
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                size="small"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                size="small"
                variant="secondary"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                size="small"
                variant="outline"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                size="small"
                variant="ghost"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
              <Button
                size="small"
                variant="destructive"
                leftIcon={<PlusIcon />}
                rightIcon={<MinusIcon />}
              >
                Icon
              </Button>
            </div>
            <Separator />
            {/* Disabled Buttons */}
            <div className="flex gap-4">
              <Button state="disabled">Disabled</Button>
              <Button state="disabled" variant="secondary">
                Disabled
              </Button>
              <Button state="disabled" variant="outline">
                Disabled
              </Button>
              <Button state="disabled" variant="ghost">
                Disabled
              </Button>
              <Button state="disabled" variant="destructive">
                Disabled
              </Button>
            </div>
            <Separator />
            {/* Loading Buttons */}
            <div className="flex gap-4">
              <Button
                state="loading"
                rightIcon={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              >
                Loading...
              </Button>
              <Button
                state="loading"
                rightIcon={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                variant="secondary"
              >
                Loading...
              </Button>
              <Button
                state="loading"
                rightIcon={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                variant="outline"
              >
                Loading...
              </Button>
              <Button
                state="loading"
                rightIcon={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                variant="ghost"
              >
                Loading...
              </Button>
              <Button
                state="loading"
                rightIcon={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                variant="destructive"
              >
                Loading...
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Icon Button</CardTitle>
            <CardDescription>Buttons containing only icons.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <Monitor className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Phone className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Shield className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive">
              <CreditCard className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Success/Error Buttons</CardTitle>
            <CardDescription>
              Buttons with success and error state indicators.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button
              variant="outline"
              className="bg-green-500 hover:bg-green-600 text-white"
              leftIcon={<Check className="mr-2 h-4 w-4" />}
            >
              Success
            </Button>
            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-600 text-white"
              leftIcon={<X className="mr-2 h-4 w-4" />}
            >
              Error
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Custom 404 Page</CardTitle>
            <CardDescription>A custom-styled 404 error page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/not_found">Visit the 404 page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
