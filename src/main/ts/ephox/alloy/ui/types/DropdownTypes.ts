import { Future, Option, Result } from '@ephox/katamari';
// TODO: Fix this.
import { TieredData } from '../../api/Main';
import { TieredMenuSpec } from '../../ui/types/TieredMenuTypes';

import { AlloyBehaviourRecord } from '../../api/behaviour/Behaviour';
import { AlloyComponent } from '../../api/component/ComponentApi';
import { SketchBehaviours } from '../../api/component/SketchBehaviours';
import { AlloySpec, RawDomSchema } from '../../api/component/SpecTypes';
import { CompositeSketch, CompositeSketchDetail, CompositeSketchSpec } from '../../api/ui/Sketcher';
import { AnchorSpec } from '../../positioning/mode/Anchoring';

// F is the fetched data
export interface CommonDropdownDetail<F> extends CompositeSketchDetail {
  uid: () => string;
  dom: () => RawDomSchema;
  components: () => AlloySpec[ ];

  role: () => Option<string>;
  eventOrder: () => Record<string, string[]>;
  fetch: () => (comp: AlloyComponent) => Future<F>;
  onOpen: () => (anchor: AnchorSpec, comp: AlloyComponent, menu: AlloyComponent) => void;

  lazySink?: () => Option<() => Result<AlloyComponent, Error>>;
  matchWidth: () => boolean;
  sandboxClasses: () => string[];
}

export interface DropdownDetail extends CommonDropdownDetail<TieredData>, CompositeSketchDetail {
  dropdownBehaviours: () => SketchBehaviours;
  onExecute: () => (sandbox: AlloyComponent, item: AlloyComponent, value: any) => void;
  toggleClass: () => string;
}

export interface DropdownSpec extends CompositeSketchSpec {
  uid?: string;
  dom: RawDomSchema;
  components?: AlloySpec[];
  fetch: (comp: AlloyComponent) => Future<TieredData>;
  onOpen?: (anchor: AnchorSpec, comp: AlloyComponent, menu: AlloyComponent) => void;
  dropdownBehaviours?: AlloyBehaviourRecord;
  onExecute?: (sandbox: AlloyComponent, item: AlloyComponent, value: any) => void;
  sandboxClasses?: string[];

  toggleClass: string;
  lazySink?: any;
  parts: {
    menu: Partial<TieredMenuSpec>;
  };
  matchWidth?: boolean;
  role?: string;
}

export interface DropdownSketcher extends CompositeSketch<CompositeSketchSpec, CompositeSketchDetail> { }