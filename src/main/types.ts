import ObservableValue from "./beans/ObservableValue";

export type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void
export type ValueChangeListener<T> = (now: T, old: T) => void
export type Predicate<T> = (val: T) => boolean
export type Class<T> = new() => T
export type Flatten<T> = T extends ObservableValue<infer U> ? U : T
export type Entry<K, V> = {key: K, val: V}