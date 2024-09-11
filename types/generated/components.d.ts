import type { Schema, Attribute } from '@strapi/strapi';

export interface ConversationBlocksConversationBlock extends Schema.Component {
  collectionName: 'components_conversation_blocks_conversation_blocks';
  info: {
    displayName: 'Conversation Block';
    icon: 'microphone';
    description: '';
  };
  attributes: {
    speaker: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface CourseCardsCourseFeatureRows extends Schema.Component {
  collectionName: 'components_course_cards_course_feature_rows';
  info: {
    displayName: 'Course Feature Rows';
    icon: 'check';
  };
  attributes: {
    feature: Attribute.Text;
  };
}

export interface ExerciseBlocksGapFillingRow extends Schema.Component {
  collectionName: 'components_exercise_blocks_gap_filling_rows';
  info: {
    displayName: 'Gap Filling Row';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface ExerciseBlocksGapFilling extends Schema.Component {
  collectionName: 'components_exercise_blocks_gap_fillings';
  info: {
    displayName: 'Gap Filling';
    icon: 'book';
    description: '';
  };
  attributes: {
    rows: Attribute.Component<'exercise-blocks.gap-filling-row', true>;
  };
}

export interface LessonPageBlocksCallout extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_callouts';
  info: {
    displayName: 'Callout';
    icon: 'message';
  };
  attributes: {
    type: Attribute.Enumeration<['tip', 'task']>;
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface LessonPageBlocksConversation extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_conversations';
  info: {
    displayName: 'Conversation';
    icon: 'quote';
    description: '';
  };
  attributes: {
    row: Attribute.Component<'conversation-blocks.conversation-block', true>;
    audio: Attribute.Media;
  };
}

export interface LessonPageBlocksExercise extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_exercises';
  info: {
    displayName: 'Exercise';
    icon: 'question';
  };
  attributes: {
    exercise: Attribute.Relation<
      'lesson-page-blocks.exercise',
      'oneToOne',
      'api::exercise.exercise'
    >;
  };
}

export interface LessonPageBlocksParagraph extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'file';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface LessonPageBlocksVerb extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_verbs';
  info: {
    displayName: 'Verb';
    icon: 'walk';
  };
  attributes: {
    infinitive: Attribute.String;
    firstSing: Attribute.String;
    secondSing: Attribute.String;
    thirdSing: Attribute.String;
    firstPlu: Attribute.String;
    secondPlu: Attribute.String;
    thirdPlu: Attribute.String;
  };
}

export interface LessonPageBlocksVocabBlock extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_vocab_blocks';
  info: {
    displayName: 'Tile Block';
    icon: 'layer';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    imageSize: Attribute.Enumeration<['large', 'medium', 'small']> &
      Attribute.DefaultTo<'large'>;
    row: Attribute.Component<'vocab-blocks.audio-row', true>;
    hero: Attribute.Boolean & Attribute.DefaultTo<false>;
    columns: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    vAlign: Attribute.Enumeration<['top', 'center', 'bottom']>;
  };
}

export interface VocabBlocksAudioRow extends Schema.Component {
  collectionName: 'components_vocab_blocks_audio_rows';
  info: {
    displayName: 'Audio Row';
    icon: 'microphone';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    audio: Attribute.Media;
    column: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    image: Attribute.Media;
    gap: Attribute.Boolean & Attribute.DefaultTo<false>;
    isColumn: Attribute.Boolean & Attribute.DefaultTo<false>;
    isCentred: Attribute.Boolean & Attribute.DefaultTo<false>;
    imageSize: Attribute.Enumeration<['large', 'medium', 'small']> &
      Attribute.DefaultTo<'medium'>;
  };
}

export interface VocabBlocksContent extends Schema.Component {
  collectionName: 'components_vocab_blocks_contents';
  info: {
    displayName: 'content';
    icon: 'quote';
  };
  attributes: {};
}

export interface VocabBlocksSimple extends Schema.Component {
  collectionName: 'components_vocab_blocks_simples';
  info: {
    displayName: 'Simple';
    icon: 'write';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'conversation-blocks.conversation-block': ConversationBlocksConversationBlock;
      'course-cards.course-feature-rows': CourseCardsCourseFeatureRows;
      'exercise-blocks.gap-filling-row': ExerciseBlocksGapFillingRow;
      'exercise-blocks.gap-filling': ExerciseBlocksGapFilling;
      'lesson-page-blocks.callout': LessonPageBlocksCallout;
      'lesson-page-blocks.conversation': LessonPageBlocksConversation;
      'lesson-page-blocks.exercise': LessonPageBlocksExercise;
      'lesson-page-blocks.paragraph': LessonPageBlocksParagraph;
      'lesson-page-blocks.verb': LessonPageBlocksVerb;
      'lesson-page-blocks.vocab-block': LessonPageBlocksVocabBlock;
      'vocab-blocks.audio-row': VocabBlocksAudioRow;
      'vocab-blocks.content': VocabBlocksContent;
      'vocab-blocks.simple': VocabBlocksSimple;
    }
  }
}
