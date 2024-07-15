/*! *****************************************************************************
Copyright (c) 2022 Bytedance, Inc. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*******************************************************************************/

import {
  Instance as ComponentInstance,
  PropertyOption as ComponentPropertyOption,
  MethodOption as ComponentMethodOption,
  Data as ComponentData,
  Method as ComponentMethod,
  Property as ComponentProperty,
  Lifetimes as ComponentLifetimes,
  OtherOption as ComponentOtherOption,
} from "./component";
import { AnyObject } from "./helper";

type PropertyOption = ComponentPropertyOption;
type MethodOption = ComponentMethodOption;
type Data<T extends AnyObject> = ComponentData<T>;
type Property<T extends PropertyOption> = ComponentProperty<T>;
type Method<T extends MethodOption> = ComponentMethod<T>;
type Lifetimes = ComponentLifetimes;
type OtherOption = Omit<ComponentOtherOption, "options">;

type Instance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
> = ComponentInstance<TData, TProperty, TMethod, T>;

type BehaviorInstance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
> = Partial<Data<TData>> &
  Partial<Property<TProperty>> &
  Partial<Method<TMethod>> &
  Partial<OtherOption> &
  Partial<Lifetimes> &
  ThisType<Instance<TData, TProperty, TMethod, T>>;

export type BehaviorConstructor = <
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
>(
  options: BehaviorInstance<TData, TProperty, TMethod, T>
) => string;
