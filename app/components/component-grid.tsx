'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Shield,
  Plus,
  Monitor,
  Phone,
  CreditCard,
  Check,
  X,
} from 'lucide-react'
import Link from 'next/link'

export function ComponentGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <Card className="md:col-span-2 lg:col-span-6">
          <CardHeader>
            <CardTitle>Text Button</CardTitle>
            <CardDescription>Button with a text style</CardDescription>
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

        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Icon Button</CardTitle>
            <CardDescription>Button with only icon inside</CardDescription>
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
              Buttons with success and error states
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
            <CardDescription>Styled 404 page with animation</CardDescription>
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
