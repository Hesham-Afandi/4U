import { Curriculum } from '../types';
import { math12Curriculum } from '../curriculum/uae/moe/grade12/math';
import { physics12Curriculum } from '../curriculum/uae/moe/grade12/physics';
import { mathOthersCurriculum } from '../curriculum/mathOthers';
import { physicsOthersCurriculum } from '../curriculum/physicsOthers';
import {
  phy12General1,
  phy12Inspire1,
  math11AdvBridge1,
  math12General1,
  phy11AdvBridge1,
  math11General1
} from '../curriculum/uae/addedCurriculums';

// Grade 9 Physics & Math
import { phy9AdvBridge1, phy9AdvInspire1 } from '../curriculum/uae/grade9Physics';
import { math9AdvInspire1, math9AdvBridge1 } from '../curriculum/uae/grade9Math';

// Grade 10 Physics & Math
import { phy10AdvInspire1, phy10AdvBridge1 } from '../curriculum/uae/grade10Physics';
import { math10General1 } from '../curriculum/uae/grade10MathGeneral';
import { math10AdvBridge1 } from '../curriculum/uae/grade10MathBridge';
import { math10AdvInspire1 } from '../curriculum/uae/grade10MathInspire';

export const curriculums: Record<string, Curriculum> = {
  ...math12Curriculum,
  ...mathOthersCurriculum,
  ...physics12Curriculum,
  ...physicsOthersCurriculum,

  // Added UAE Curriculums
  'physics-12-general-1': phy12General1,
  'UAE-physics-12-general-1': phy12General1,
  'phy-12-general-1': phy12General1,
  'UAE-phy-12-general-1': phy12General1,

  'physics-12-inspire-1': phy12Inspire1,
  'UAE-physics-12-inspire-1': phy12Inspire1,
  'phy-12-inspire-1': phy12Inspire1,
  'UAE-phy-12-inspire-1': phy12Inspire1,

  // Grade 11 Inspire Physics is same as Grade 12 Inspire Physics Term 1
  'physics-11-inspire-1': phy12Inspire1,
  'UAE-physics-11-inspire-1': phy12Inspire1,
  'phy-11-inspire-1': phy12Inspire1,
  'UAE-phy-11-inspire-1': phy12Inspire1,

  'math-11-bridge-1': math11AdvBridge1,
  'UAE-math-11-bridge-1': math11AdvBridge1,
  'math-11-adv-bridge-1': math11AdvBridge1,
  'UAE-math-11-adv-bridge-1': math11AdvBridge1,

  'math-12-general-1': math12General1,
  'UAE-math-12-general-1': math12General1,

  // Grade 11 Advanced Physics Bridge Term 1
  'physics-11-bridge-1': phy11AdvBridge1,
  'UAE-physics-11-bridge-1': phy11AdvBridge1,
  'phy-11-bridge-1': phy11AdvBridge1,
  'UAE-phy-11-bridge-1': phy11AdvBridge1,
  'physics-11-adv-bridge-1': phy11AdvBridge1,
  'UAE-physics-11-adv-bridge-1': phy11AdvBridge1,
  'phy-11-adv-bridge-1': phy11AdvBridge1,
  'UAE-phy-11-adv-bridge-1': phy11AdvBridge1,

  // Grade 11 General Math Term 1
  'math-11-general-1': math11General1,
  'UAE-math-11-general-1': math11General1,
  'math-11-gen-1': math11General1,
  'UAE-math-11-gen-1': math11General1,

  // Grade 9 Physics (Adv Bridge 1 & Adv Inspire 1)
  'phy-9-adv-bridge-1': phy9AdvBridge1,
  'UAE-phy-9-adv-bridge-1': phy9AdvBridge1,
  'physics-9-adv-bridge-1': phy9AdvBridge1,
  'UAE-physics-9-adv-bridge-1': phy9AdvBridge1,
  'physics-9-bridge-1': phy9AdvBridge1,
  'UAE-physics-9-bridge-1': phy9AdvBridge1,

  'phy-9-adv-inspire-1': phy9AdvInspire1,
  'UAE-phy-9-adv-inspire-1': phy9AdvInspire1,
  'physics-9-adv-inspire-1': phy9AdvInspire1,
  'UAE-physics-9-adv-inspire-1': phy9AdvInspire1,
  'physics-9-inspire-1': phy9AdvInspire1,
  'UAE-physics-9-inspire-1': phy9AdvInspire1,

  // Grade 9 Math (Adv Inspire 1 & Adv Bridge 1)
  'math-9-adv-inspire-1': math9AdvInspire1,
  'UAE-math-9-adv-inspire-1': math9AdvInspire1,
  'math-9-inspire-1': math9AdvInspire1,
  'UAE-math-9-inspire-1': math9AdvInspire1,
  'math-9-adv-bridge-1': math9AdvBridge1,
  'UAE-math-9-adv-bridge-1': math9AdvBridge1,
  'math-9-bridge-1': math9AdvBridge1,
  'UAE-math-9-bridge-1': math9AdvBridge1,

  // Grade 10 Physics (Adv Inspire 1 & Adv Bridge 1)
  'phy-10-adv-inspire-1': phy10AdvInspire1,
  'UAE-phy-10-adv-inspire-1': phy10AdvInspire1,
  'physics-10-adv-inspire-1': phy10AdvInspire1,
  'UAE-physics-10-adv-inspire-1': phy10AdvInspire1,
  'physics-10-inspire-1': phy10AdvInspire1,
  'UAE-physics-10-inspire-1': phy10AdvInspire1,

  'phy-10-adv-bridge-1': phy10AdvBridge1,
  'UAE-phy-10-adv-bridge-1': phy10AdvBridge1,
  'physics-10-adv-bridge-1': phy10AdvBridge1,
  'UAE-physics-10-adv-bridge-1': phy10AdvBridge1,
  'physics-10-bridge-1': phy10AdvBridge1,
  'UAE-physics-10-bridge-1': phy10AdvBridge1,

  // Grade 10 Math (General 1, Adv Bridge 1, Adv Inspire 1)
  'math-10-general-1': math10General1,
  'UAE-math-10-general-1': math10General1,

  'math-10-adv-bridge-1': math10AdvBridge1,
  'UAE-math-10-adv-bridge-1': math10AdvBridge1,
  'math-10-bridge-1': math10AdvBridge1,
  'UAE-math-10-bridge-1': math10AdvBridge1,

  'math-10-adv-inspire-1': math10AdvInspire1,
  'UAE-math-10-adv-inspire-1': math10AdvInspire1,
  'math-10-inspire-1': math10AdvInspire1,
  'UAE-math-10-inspire-1': math10AdvInspire1
};
