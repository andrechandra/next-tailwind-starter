'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
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
} from 'lucide-react'
import Link from 'next/link'

export function ComponentGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Text Button</CardTitle>
            <CardDescription>
              Various button styles with different appearances.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Button>Primary Variant</Button>
            <Button variant="secondary">Secondary Variant</Button>
            <Button variant="outline">Outline Variant</Button>
            <Button variant="ghost">Ghost Variant</Button>
            <Button variant="link">Link Variant</Button>
            <Button variant="destructive">Destructive Variant</Button>
            <Button size="sm">Small Size</Button>
            <Button size="lg">Large Size</Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Underline Link Button</CardTitle>
            <CardDescription>
              Link buttons with an underlined text style.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <LinkButton variant="underline_link_right">
              Internal Links
            </LinkButton>
            <LinkButton variant="underline_link_left">
              Internal Links
            </LinkButton>
            <Separator orientation="vertical" />
            <LinkButton variant="underline_link_right">
              External Links
            </LinkButton>
            <LinkButton variant="underline_link_left">
              External Links
            </LinkButton>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Arrow Underline Link Button</CardTitle>
            <CardDescription>
              Underlined link buttons with animated arrow icons.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <LinkButton variant="underline_link_right" asChild>
              <Link href="/" className="flex items-center group">
                Internal Links
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </LinkButton>
            <LinkButton variant="underline_link_left" asChild>
              <Link href="/" className="flex items-center group">
                <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Internal Links
              </Link>
            </LinkButton>
            <Separator orientation="vertical" />
            <LinkButton variant="underline_link_right" asChild>
              <Link href="/" className="flex items-center group">
                External Links
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </LinkButton>
            <LinkButton variant="underline_link_left" asChild>
              <Link href="/" className="flex items-center group">
                <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                External Links
              </Link>
            </LinkButton>
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
            <Button size="icon">
              <Monitor className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <Shield className="h-4 w-4" />
            </Button>
            <Button size="icon">
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
            >
              <Check className="mr-2 h-4 w-4" /> Success
            </Button>
            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <X className="mr-2 h-4 w-4" /> Error
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
              <Link href="/404">Visit the 404 page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
