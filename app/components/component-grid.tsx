'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Shield,
  Plus,
  Monitor,
  Phone,
  CreditCard,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'

export function ComponentGrid() {
  const [email, setEmail] = useState('')

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
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline_primary">Outline Primary</Button>
            <Button variant="ghost_primary">Ghost Primary</Button>
            <Button variant="dark">Dark Variant</Button>
            <Button variant="light">Light Variant</Button>
            <Button variant="underline">Underline Animation</Button>
            <Button variant="arrow">
              Arrow Button{' '}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="direction_left">
              <ArrowRight />
              Left Direction
            </Button>
            <Button variant="direction_right">
              Right Direction
              <ArrowRight />
            </Button>
            <Button variant="polymorphic">Polymorphic Effect</Button>
            <Button variant="polymorphic_outline">Polymorphic Outline</Button>
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
            <CardTitle>Input Field</CardTitle>
            <CardDescription>Standard input with label</CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Switch between different views</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
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
              <a href="/404">Visit the 404 page</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
